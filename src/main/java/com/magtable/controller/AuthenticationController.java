package com.magtable.controller;

import com.magtable.model.api.AuthenticationRequest;
import com.magtable.model.api.AuthenticationResponse;
import com.magtable.model.api.MagUserDetails;
import com.magtable.model.api.SafeUser;
import com.magtable.model.entities.User;
import com.magtable.repository.UserRepository;
import com.magtable.services.ErrorService;
import com.magtable.services.userServices.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * REST Controller for User Authentication
 * @author David Ward
 */
@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    public PasswordService passwordService;

    @Autowired
    public AuthenticationService authenticationService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    public ErrorService errorService;

    /**
     * route           POST /authenticate
     * description     method to verify a username/password combo and return a JWT
     * access          Public - Anyone can make a login request
     *
     * @return a JWT response object
     */
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateLogin(@RequestBody AuthenticationRequest request) {

        User user;
        user = authenticationService.authenticate(request);

        if(user.isReset()){
            //User requires a password reset
            //Telling the front end that we didn't finish, the HTTP status may not be the right one.
           throw errorService.updatePassword();
        }

        // User does not need a password reset
        // creating a new userdetails to generate the jwt token
        MagUserDetails userDetails = new MagUserDetails(user);
        String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    /**
     * route           POST /password/reset
     * description     method to verify a username/password/newpassword - sets the new password and stores in database then returns a JWT
     * access          Public - Anyone can make a request
     *
     * @return a JWT response object
     */
    @PostMapping("/password/reset")
    public ResponseEntity<?> authenticatePasswordReset(@RequestBody AuthenticationRequest request) {
        new ValidationService<>("request", request).exists();
        // Validating the new password follows business
        new ValidationService<>("newpassword", request.getNewPassword()).exists().isString().isMinLengthString(8);

        User user;
        user = authenticationService.authenticate(request);
        System.out.println(user);

        if(!user.isReset()){
            //Telling the front end that we didn't finish, the HTTP status may not be the right one.
            throw errorService.ineligibleUser();
        }

        // user is authenticated there new password is OK
        // changing the users password to the new one, encoding it using PasswordService and saving in the database
        String newPassword = request.getNewPassword();
        String encodedPassword = passwordService.encode(newPassword);
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
                   errorService.userNotFound(username));

            //returning the new safe user
            return new SafeUser(user);
        } catch (NullPointerException e) {
            throw errorService.jwtNotFound();
        }
    }
}

