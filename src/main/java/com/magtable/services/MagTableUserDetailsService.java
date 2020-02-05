package com.magtable.services;

import com.magtable.model.User;
import com.magtable.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

public class MagTableUserDetailsService implements UserDetailsService {

    //Autowire means spring INJECTS and instance of a field into this class
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user =userRepository.findUserByUsername(username);
    return null;
    }
}
