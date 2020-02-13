package com.magtable.controller;

import com.magtable.model.AuthenticationRequest;
import com.magtable.model.AuthenticationResponse;
import com.magtable.model.MagUserDetails;
import com.magtable.model.User;
import com.magtable.repository.UserRepository;
import com.magtable.services.JwtUtil;
import com.magtable.services.MagUserDetailsService;
import com.magtable.services.PasswordService;
import com.magtable.services.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.UnsatisfiedServletRequestParameterException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    public PasswordService passwordService;

    @Autowired
    private UserRepository userRepository;

    /**
     * route           POST /authenticate
     * description     method to verify a username/password combo and return a JWT
     * access          Public - Anyone can make a login request
     *
     * @return a JWT response object
     */
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateLogin(@RequestBody AuthenticationRequest request) {

        UsernamePasswordAuthenticationToken authenticationToken;
        try {
            authenticationToken = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());
            // authenticate() searches database authentication token values
            authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    String.format("Authentication failed: .", request.getUsername()));
        }
        // User is authenticated here
        // Finding the user in the database
        User user;
        user = userRepository.findUserByUsername(authenticationToken.getName()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND));


        // I'm keeping this because we don't need a orElseThrow previously
        if(user.isReset()){
            //User requires a password reset
            //Telling the front end that we didn't finish, the HTTP status may not be the right one.
            throw new ResponseStatusException(HttpStatus.SEE_OTHER, "Password update required");
        }

        // User does not need a password reset
        // creating a new userdetails to generate the jwt token
        MagUserDetails userDetails = new MagUserDetails(user);
        String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }


    /**
     * route           POST /passwordreset
     * description     method to verify a username/password/newpassword - sets the new password and stores in database then returns a JWT
     * access          Public - Anyone can make a request
     *
     * @return a JWT response object
     */
    @PostMapping("/passwordreset")
    public ResponseEntity<?> authenticatePasswordReset(@RequestBody AuthenticationRequest request) {

        //Validating the new password follows business
        new ValidationService<>("request", request).exists();
        new ValidationService<>("newpassword", request.getNewpassword()).exists().isString().isMinLengthString(8);

        UsernamePasswordAuthenticationToken authenticationToken;
        try {
            authenticationToken = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());
            // authenticate() searches database authentication token values
            authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    String.format("Authentication failed: .", request.getUsername()));
        }

        // User is authenticated here
        // Finding the user in the database
        User user;
        user = userRepository.findUserByUsername(authenticationToken.getName()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND));

        if(!user.isReset()){
            //User requires a password reset
            //Telling the front end that we didn't finish, the HTTP status may not be the right one.
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User is not eligible for a password reset");
        }

        // user is authenticated there new password is OK
        // changing the users password to the new one, encoding it using PasswordService and saving in the database
        String newPassword = request.getNewpassword();
        String encodedPassword = passwordService.encodePass(newPassword);
        user.setPassword(encodedPassword);

        //setting the reset flag back to false
        user.setReset(false);
        //saving the user in the database
        userRepository.save(user);

        // creating a new userdetails to generate the jwt token
        MagUserDetails userDetails = new MagUserDetails(user);
        String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }



}

