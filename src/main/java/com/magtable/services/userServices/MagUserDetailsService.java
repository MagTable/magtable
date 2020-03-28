package com.magtable.services.userServices;

import com.magtable.model.api.MagUserDetails;
import com.magtable.model.entities.User;
import com.magtable.repository.UserRepository;
import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


/**
 * Class to override the loadUserByUsername method in {@link UserDetailsService} with our
 * own implementation.
 * @author David Ward
 * Created with Reference too : "Spring Boot + Spring Security + JWT from scratch - Java Brains" - https://www.youtube.com/watch?v=X80nJ5T7YpE&list=PLqq-6Pq4lTTYTEooakHchTGglSvkZAjnE&index=12
 */
@Service
public class MagUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ErrorService errorService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        //Searching the database for the user
        User user = userRepository.findUserByUsername(username).orElseThrow(() -> errorService.userNotFound(username));
        return new MagUserDetails(user);
    }
}
