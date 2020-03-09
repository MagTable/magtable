package com.magtable.services.userServices;

import com.magtable.model.AuthenticationRequest;
import com.magtable.model.User;
import com.magtable.repository.UserRepository;
import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    public ErrorService errorService;

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
            throw errorService.badCredentials();
        }

        User user;
        user = userRepository.findUserByUsername(authenticationToken.getName()).orElseThrow(() ->
                errorService.userNotFound(authenticationToken.getName())); //Todo This is never thrown will have to be fixed

        return user;
    }
}
