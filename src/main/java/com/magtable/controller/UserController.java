package com.magtable.controller;

import com.magtable.model.*;
import com.magtable.repository.RoleRepository;
import com.magtable.repository.UserRepository;

import com.magtable.services.JwtUtil;
import com.magtable.services.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

   @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JwtUtil jwtTokenUtil;


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

        //Iterating through the userList, converting each User to a SafeUser, then adding to the safeList
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
                new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User #%d not found.", userId)));

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
        new ValidationService<>("Username", user.getUsername()).exists().isString().isMinLengthString(5); // TODO discuss username min length
        new ValidationService<>("UserId", user.getId()).notExists();

        Role role;
        try {
            role = roleRepository.findById(user.getRole().getId()).orElseThrow(() ->
                    new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Role #%d not found.", user.getRole().getId())));
        } catch (NullPointerException e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Required field \"role\" is null.");
        }

        try {
            user.setReset(true); // reset is true at the time of account creation
            user.setRole(role);
            user.setPassword(null); //This is just a safety set to null;
            user.generateResetPassword(); //Setting the resetpassword of our user to be created to the randomly generated password
            userRepository.save(user); //Storing our new user in the database

            return user;
        } catch (DataIntegrityViolationException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username already exists");
        }catch (Exception e){
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
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
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") final int userId) {
        // TODO make sure user isn't deleting themselves
        // need access to request username from JWT
        try {
            userRepository.deleteById(userId);
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (EmptyResultDataAccessException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    String.format("Deletion failed: User #%d not found.", userId));
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
                new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User #%d not found.", userId)));

        user.generateResetPassword(); // create new resetPassword and set reset flag to true

        userRepository.save(user);

        return user;
    }

}

