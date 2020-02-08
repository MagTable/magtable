package com.magtable.controller;

import com.magtable.model.Role;
import com.magtable.model.SafeUser;
import com.magtable.model.User;
import com.magtable.repository.RoleRepository;
import com.magtable.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


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
     * access          Private @TODO
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
     * access          Private @TODO
     *
     * @param userId id of user to query
     * @return User user with matching ID
     */
    @GetMapping("/{id}")
    public SafeUser getUserById(@PathVariable(value = "id") int userId) {
        //this whole orElseThrow thing looks fancy but it isn't
        //If JPA can't find the repository we throw an exception

        User user = userRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User #%d not found.", userId)));

        return new SafeUser(user);
    }


    /**
     * route            POST /user/add
     * description     Insert user
     * access          Private @TODO
     *
     * @param user User to insert
     * @return User created user
     */

    @PostMapping("/add")
    public SafeUser createUser(@RequestBody User user) {
        //Checking password length
        if (user.getPassword().length() < 8) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password minimum length is 8 characters.");
        }

        Role role = roleRepository.findByRolename(user.getRole().getRolename()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User #%d not found.", user.getRole().getRolename())));

        try {

            user.setRole(role);
            userRepository.save(user);
            return new SafeUser(user);
        } catch (Exception e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username already exists");
        }

    }

    /**
     * route           DELETE /user/{id}
     * description     Delete user by ID
     * access          Private @TODO
     *
     * @param userId id of user to delete
     */
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable(value = "id") final int userId) {
        try {
            userRepository.deleteById(userId);
            return String.format("Deletion Success: User #%d Deleted.", userId);
        } catch (EmptyResultDataAccessException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    String.format("Deletion failed: User #%d not found.", userId));
        }
    }


    /**
     * route            POST /user/roles
     * description     provides a list of all user roles
     * access          Private @TODO
     *
     * @return List of roles
     */
    @GetMapping("/roles")
    public List getAllRoles(){
        return roleRepository.findAll();
    }

}

