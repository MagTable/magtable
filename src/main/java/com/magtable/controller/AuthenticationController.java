package com.magtable.controller;

import com.magtable.model.AuthenticationRequest;
import com.magtable.model.AuthenticationResponse;
import com.magtable.services.JwtUtil;
import com.magtable.services.MagUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class AuthenticationController {


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MagUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtTokenUtil;


    /**
     * route           GET /authenticate
     * description     method to verify a username/password combo and return a JWT
     * access          Public - Anyone can make a login request
     *
     * @return a JWT response object
     */
    @PostMapping("/authenticate")
    public ResponseEntity createAuthenticationToken(@RequestBody AuthenticationRequest request) {

        //TODO @ARRAN Add logic for chceking is a user is a reset user
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        } catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Authentication failed: User #%s not found.", request.getUsername()));
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());

        String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));




    }


}

