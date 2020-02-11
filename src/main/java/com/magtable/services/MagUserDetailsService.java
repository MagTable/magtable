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

/**
 * Class to override the loadUserByUsername method in {@link UserDetailsService} with our
 * own implementation.
 */
@Service
public class MagUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        //Searching the database for the user
        User user = userRepository.findUserByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Not found: " + username));
        return new MagUserDetails(user);
    }
}
