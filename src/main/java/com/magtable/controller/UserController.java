package com.magtable.controller;

import com.magtable.model.User;
import com.magtable.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
     * @return java.util.List<User> list of all users
     */
    @GetMapping("/all")
    public List<User> getAllUsers() {
        // @TODO remove password field from query
        return userRepository.findAll();
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
    public User getUserById(@PathVariable(value = "id") Long userId) {
        //this whole orElseThrow thing looks fancy but it isn't
        //If JPA can't find the repository we throw an exception

        return userRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User #%d not found.", userId)));
    }


    /**
     * route            POST /user/insert
     * description     Insert user
     * access          Private @TODO
     *
     * @param user User to insert
     * @return User created user
     */
    @PostMapping("/insert")
    public User createUser(@RequestBody User user) {
        if (user.getPassword().length() < 8) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password minimum length is 8 characters.");
        }
        return userRepository.save(user);
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
