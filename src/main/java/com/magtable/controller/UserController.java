package com.magtable.controller;

import com.magtable.model.entities.Role;
import com.magtable.model.api.SafeUser;
import com.magtable.model.entities.User;
import com.magtable.repository.RoleRepository;
import com.magtable.repository.UserRepository;
import com.magtable.services.ErrorService;
import com.magtable.services.userServices.JwtUtil;
import com.magtable.services.userServices.PasswordService;
import com.magtable.services.userServices.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * REST controller for user management routes
 * @author David Ward, Mustafa Al Khaldi, Arran Woodruff
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    public PasswordService passwordService;

    @Autowired
    public ErrorService errorService;

    /**
     * route           GET /user/all
     * description     Get all users
     * access          Private - System Managers
     *
     * @return safe list of all users (password removed)
     */
    @GetMapping("/all")
    public List<SafeUser> getAllUsers() {
        List<SafeUser> safeList = new ArrayList<>();
        List<User> userList = userRepository.findAll();

        // Iterating through the userList, converting each User to a SafeUser, then adding to the safeList
        for (User user : userList) {
            safeList.add(new SafeUser(user));
        }

        return safeList;
    }
    /**
     * route            GET /user/{id}
     * description     Get user by ID
     * access          Private - System Managers
     *
     * @param userId id of user to query
     * @return User user with matching ID
     */
    @GetMapping("/{id}")
    public SafeUser getUserById(@PathVariable(value = "id") int userId) {
        User user = userRepository.findById(userId).orElseThrow(() ->
                errorService.userIdNotFound(userId));

        return new SafeUser(user);
    }

    /**
     * route           POST /user/add
     * description     Insert user
     * access          Private - System Managers
     *
     * @param user User to insert
     * @return SafeUser created user
     */
    @PostMapping("/add")
    public User createUser(@RequestBody User user) {
        // current cannot catch the error for when user.userId is a string, it occurs during the JSON -> Java translation
        new ValidationService<>("User", user).exists();
        new ValidationService<>("Username", user.getUsername()).exists().isString().isMinLengthString(5);
        new ValidationService<>("UserId", user.getId()).notExists();

        Role role;
        try {
            role = roleRepository.findById(user.getRole().getId()).orElseThrow(() ->
                    errorService.roleNotFound(user.getRole().getId()));
        } catch (NullPointerException e) {
            e.printStackTrace();
            throw errorService.nullRole();
        }

        //PasswordService created here for the try/catch/finally block
        try {
            user.setReset(true); // reset is true at the time of account creation
            user.setRole(role);
            user.setPassword(null); //This is just a safety set to null;

            String randomPassword = passwordService.generateResetPassword();

            String encodedPassword = passwordService.encode(randomPassword);
            user.setPassword(encodedPassword);
            userRepository.save(user); //Storing our new user in the database

            user.setPassword(randomPassword); //Setting the resetpassword of our user to be created to the randomly generated password by PasswordService
            return user;
        } catch (DataIntegrityViolationException e) {
            throw errorService.duplicateUsername();
        } catch (Exception e){
            e.printStackTrace();
            throw errorService.serverError();
        }
    }

    /**
     * route           DELETE /user/{id}
     * description     Delete user by ID
     * access          Private - System Managers
     *
     * @param userId id of user to delete
     */
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(HttpServletRequest request, @PathVariable(value = "id") final int userId) {
        // need access to request username from JWT
        String jwt = request.getHeader("Authorization");
        try {
            //extracting the username from the jwt token
            String username = jwtTokenUtil.extractUsername(jwt.substring(7)); // jwt can potentially be null
            //searching the database for the user
            User user = userRepository.findUserByUsername(username).orElseThrow(() ->
                    errorService.userNotFound(username));

            if (user.getId() == userId) {
                throw errorService.deleteYourself();
            }

            userRepository.deleteById(userId);
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (EmptyResultDataAccessException e) {
            throw errorService.userIdNotFound(userId);
        } catch (NullPointerException e) {
            throw errorService.jwtNotFound();
        }
    }
    /**
     * route           GET /user/roles
     * description     provides a list of all user roles
     * access          Private - System Managers
     *
     * @return List of roles
     */
    @GetMapping("/roles")
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    /**
     * route           PUT /reset/{id}
     * description     reset a user's password.
     * sets their password to null and generates a random temporary password for the resetPassword field
     * access          Private - System Managers
     *
     * @return User object with newly reset password
     */
    @PutMapping("/reset/{id}")
    public User resetPassword(@PathVariable(value = "id") final int userId) {
        User user = userRepository.findById(userId).orElseThrow(() ->
                errorService.userIdNotFound(userId));

        String randomPassword  = passwordService.generateResetPassword(); // generate random password
        String encodedPassword = passwordService.encode(randomPassword); // encode password

        user.setReset(true); // set reset flag
        user.setPassword(encodedPassword); // set the encoded password

        userRepository.save(user); // save the user to the database

        user.setPassword(randomPassword); // reset to the unencoded password to send back to the front end
        return user;
    }

}

