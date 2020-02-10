package com.magtable.controller;

import com.magtable.model.AuthenticationRequest;
import com.magtable.model.AuthenticationResponse;
import com.magtable.model.MagUserDetails;
import com.magtable.model.User;
import com.magtable.repository.UserRepository;
import com.magtable.services.JwtUtil;
import com.magtable.services.MagUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.UnsatisfiedServletRequestParameterException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MagUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private UserRepository userRepository;

    /**
     * route           GET /authenticate
     * description     method to verify a username/password combo and return a JWT
     * access          Public - Anyone can make a login request
     *
     * @return a JWT response object
     */
    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest request) {

        UsernamePasswordAuthenticationToken authenticationToken;
        try {
            authenticationToken = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());
            // authenticate() searches database authentication token values
            authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    String.format("Authentication failed: User %s not found.", request.getUsername()));
        }
        // User is authenticated here
        // Finding the user in the database
        User user;
        user = userRepository.findUserByUsername(authenticationToken.getName()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND));


        // I'm keeping this because we don't need a orElseThrow previously
        if(user.isReset()){
            //User requires a password reset
            throw new ResponseStatusException(HttpStatus.SEE_OTHER, "Password update required");
        }

        // User does not need a password reset

        // creating a new userdetails to generate the token
        MagUserDetails userDetails = new MagUserDetails(user);
        String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }




}

