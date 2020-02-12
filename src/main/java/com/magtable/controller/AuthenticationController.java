package com.magtable.controller;

import com.magtable.model.*;
import com.magtable.repository.UserRepository;
import com.magtable.services.JwtUtil;
import com.magtable.services.MagUserDetailsService;
import com.magtable.services.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;

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
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Authentication failed: Invalid Credentials.");
        }
        // User is authenticated here
        // Finding the user in the database
        User user = userRepository.findUserByUsername(authenticationToken.getName()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND));

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
     * route           GET /authenticate
     * description     returns the user associated with a valid JWT
     * access          Public - Anyone can make this request
     *
     * @return SafeUser corresponding to given JWT
     */
    @GetMapping("/authenticate")
    public SafeUser getSafeUser(HttpServletRequest request) {
        //gets the authorization header from the request
        String jwt = request.getHeader("Authorization");
        try {
            //extracting the username from the jwt token
            String username = jwtTokenUtil.extractUsername(jwt.substring(7)); // jwt can potentially be null
            //searching the database for the user
            User user = userRepository.findUserByUsername(username).orElseThrow(() ->
                    new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User %s not found.", username)));

            //returning the new safe user
            return new SafeUser(user);
        } catch (NullPointerException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Authentication failed: JWT Not Found.");
        }
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
        new ValidationService<>("username", request.getUsername()).exists().isString().isMinLengthString(5);
        new ValidationService<>("password", request.getPassword()).exists().isString().isMinLengthString(8);
        System.out.println(request.getNewPassword());
        new ValidationService<>("newPassword", request.getNewPassword()).exists().isString().isMinLengthString(8);

        UsernamePasswordAuthenticationToken authenticationToken;
        try {
            authenticationToken = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());
            // authenticate() searches database authentication token values
            authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Authentication failed: Invalid Credentials.");
        }

        // User is authenticated here
        // Finding the user in the database
        User user = userRepository.findUserByUsername(authenticationToken.getName()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND));

        if(!user.isReset()){
            //User requires a password reset
            //Telling the front end that we didn't finish, the HTTP status may not be the right one.
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User is not eligible for a password reset");
        }

        // user is authenticated there new password is OK
        // changing the users password to the new one and saving in the database
        user.setPassword(request.getNewPassword());
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

