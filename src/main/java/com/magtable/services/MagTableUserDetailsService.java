package com.magtable.services;

import com.magtable.model.MagUserDetails;
import com.magtable.model.User;
import com.magtable.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MagTableUserDetailsService implements UserDetailsService {

    //Autowire means spring INJECTS and instance of a field into this class
   // @Autowired
   // private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new MagUserDetails(username);
    }
}
