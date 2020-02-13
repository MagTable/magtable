package com.magtable.services;

import com.magtable.model.AuthenticationRequest;
import com.magtable.model.User;
import com.magtable.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    /**
     * Authenticates user coming from an authentication request by searching in the database for them.
     * @param request Information provided by the client on user information to be authenticated.
     * @return User information confirmed being in the database, null otherwise.
     */
    public User authenticate(@RequestBody AuthenticationRequest request) {
        UsernamePasswordAuthenticationToken authenticationToken;
        try {
            authenticationToken = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());
            authenticationManager.authenticate(authenticationToken); // authenticate() searches database authentication token values
        } catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "Authentication failed: .");
        }

        User user;
        user = userRepository.findUserByUsername(authenticationToken.getName()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND));

        return user;
    }

    public User authenticateReset(@RequestBody AuthenticationRequest request) {


        new ValidationService<>("request", request).exists(); // Validating the new password follows business
        new ValidationService<>("newpassword", request.getNewPassword()).exists().isString().isMinLengthString(8);

        UsernamePasswordAuthenticationToken authenticationToken;
        try {
            authenticationToken = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());
            authenticationManager.authenticate(authenticationToken); // authenticate() searches database authentication token values
        } catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "Authentication failed: .");
        }

        User user;
        user = userRepository.findUserByUsername(authenticationToken.getName()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND));

        // I'm keeping this because we don't need a orElseThrow previously
        if(!user.isReset()){
            //User requires a password reset
            //Telling the front end that we didn't finish, the HTTP status may not be the right one.
            throw new ResponseStatusException(HttpStatus.SEE_OTHER, "Password reset not authorized");
        }

        return user;
    }
}
