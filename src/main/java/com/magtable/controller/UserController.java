package com.magtable.controller;

import com.magtable.model.*;
import com.magtable.repository.RoleRepository;
import com.magtable.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
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
     * @return User created user
     */

    @PostMapping("/add")
    public ResetUser createUser(@RequestBody User user) {

        if (user == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No user found in request");
        }

        //Checking password length
        if (user.getPassword() == null || user.getPassword().length() < 8) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password minimum length is 8 characters.");
        }
        //TODO discuss username minimum length as a team / if we even need this
        if (user.getUsername() == null || user.getUsername().length() < 5) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username minimum length is 5 characters");
        }

        //AND needs to be here to short circuit -> user.getUserId that returns a null raises a null pointer exception
        if (user.getUserId() != null && user.getUserId() != 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "UserId Generation Error - Request should not provide a UserId");
        }

        Role role = roleRepository.findById(user.getRole().getRoleId()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Role #%d not found.", user.getRole().getRoleId())));


        try {


            //Any User we make the reset will be true
            user.setReset(true);
            user.setRole(role);
            //Creating a new ResetUser to generate a random password
            ResetUser resetUser = new ResetUser(user);
            //Setting the resetpassword of our user to be created to the randomly generated password
            user.setResetPassword(resetUser.getResetPassword());
            //This is just a safety set to null;
            user.setPassword(null);
            //Storing our new user in the database
            userRepository.save(user);
            return resetUser;

        } catch (Exception e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Username already exists");
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
     * @return ResetUser user with newly reset password
     */
    @PutMapping("/reset/{id}")
    public SafeUser resetPassword(@PathVariable(value = "id") final int userId) {
        User user = userRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User #%d not found.", userId)));

        user.setPassword(null); // clear old, forgotten password
        user.generateResetPassword(); // create new resetPassword and set reset flag to true

        userRepository.save(user);

        return new SafeUser(user);
    }

}

