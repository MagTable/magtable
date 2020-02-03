package com.magtable.controller;

import com.magtable.exception.UserNotFoundException;
import com.magtable.model.User;
import com.magtable.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
     * @param userId id of user to query
     * @return User user with matching ID
     */
    @GetMapping("/{id}")
    public User getUserById(@PathVariable(value = "id") Long userId) {
        //this whole orElseThrow thing looks fancy but it isn't
        //If JPA can't find the repository we throw an exception
        return userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User", "id", userId));
    }


    /**
     * route            POST /user/insert
     * description     Insert user
     * access          Private @TODO
     * @param user User to insert
     * @return User created user
     */
    @PostMapping("/insert")
    public User createUser(@RequestBody User user) {
        System.out.println(user);
        // @TODO field validation (password minimum length)
        return userRepository.save(user);
    }

    /**
     * route            DELETE /user/{id}
     * description     Delete user by ID
     * access          Private @TODO
     * @param userId id of user to delete
     * @return
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable(value = "id") Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User", "id", userId));
        userRepository.delete(user);

        // @ TODO check to make sure user isn't deleting themself

        //WE need this response entity to tell Spring Boot that it is okay to delete, doesn't work without
        return ResponseEntity.ok().build();
    }

}
