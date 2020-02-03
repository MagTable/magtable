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
    UserRepository userRepository;

    /**
     * GET MAPPINGS
     **/


    //get all users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        // @TODO remove password field from query
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable(value = "id") Long userId) {
        //this whole orElseThrow thing looks fancy but it isn't
        //If JPA can't find the repository we throw an exception
        return userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User", "id", userId));
    }


    /**
     * POST MAPPINGS
     **/

    @PostMapping("/adduser")
    public User createUser(@RequestBody User user) {
        // @TODO field validation (password minimum length)
        return userRepository.save(user);
    }


    /**
     * DELETE MAPPINGS
     **/
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable(value = "id") Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User", "id", userId));
        userRepository.delete(user);

        // @ TODO check to make sure user isn't deleting themself

        //WE need this response entity to tell Spring Boot that it is okay to delete, doesn't work without
        return ResponseEntity.ok().build();
    }

}
