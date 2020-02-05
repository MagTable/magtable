package com.magtable.controller;

import com.magtable.model.SafeUser;
import com.magtable.model.User;
import com.magtable.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    /**
     * route           GET /user/all
     * description     Get all users
     * access          Private @TODO
     *
     * @return  safe list of all users (password removed)
     */
    @GetMapping("/all")
    public List<SafeUser> getAllUsers() {
        List<SafeUser> safeList = new ArrayList<>();
        List<User> userList = userRepository.findAll();

        //Iterating through the userList, converting each User to a SafeUser, then adding to the safeList
        for(User user : userList){
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
    public SafeUser getUserById(@PathVariable(value = "id") Long userId) {
        //this whole orElseThrow thing looks fancy but it isn't
        //If JPA can't find the repository we throw an exception

        User user = userRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User #%d not found.", userId)));

        return new SafeUser(user);
    }


    /**
     * route            POST /user/insert
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


        try {
            userRepository.save(user);
            return new SafeUser(user);
        }
        //TODO update the exception so its not generic when we know what gets thrown
        catch(Exception e ){
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
    public void deleteUser(@PathVariable(value = "id") final Long userId) {
        try {
            userRepository.deleteById(userId);
            // @ TODO Should we add a success message?
        } catch (EmptyResultDataAccessException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    String.format("Deletion failed: User #%d not found.", userId));
        }
    }

}
