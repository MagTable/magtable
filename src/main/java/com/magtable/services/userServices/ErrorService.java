package com.magtable.services.userServices;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ErrorService {
    /**
     * Message reporting that a password update has failed.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException updatePassword() {
        return new ResponseStatusException(HttpStatus.SEE_OTHER, "Password Update Required.");
    }

    /**
     * Message reporting that a user is not eligible for a password reset.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException ineligibleUser() {
        return new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Password Reset Not Allowed.");
    }

    /**
     * Message reporting that a user wth the provided username does not exist in the database.
     * @param username Provided username to be searched.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException userNotFound(String username) {
        return new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User %s Not Found.", username));
    }

    /**
     * Message reporting that the username field was left blank.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException nullUser() {
        return new ResponseStatusException(HttpStatus.NOT_FOUND, "Empty Username.");
    }

    /**
     * Message reporting that the authentication has failed due to a JWT not being found.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException jwtNotFound() {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, "Authentication Failed"); //todo This might be obsolete
    }

    /**
     * Message reporting that the authentication has failed due to bad credentials.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException badCredentials() {
        return new ResponseStatusException(HttpStatus.NOT_FOUND, "Bad Credentials.");
    }

    /**
     * Message reporting that a user with the provided id does not exist in the database.
     * @param id Provided id to be searched.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException userIdNotFound(int id) {
        return new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("User #%d Not Found.", id));
    }

    /**
     * Message reporting that a role with the provided id does not exist in the database.
     * @param id Provided id to be searched.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException roleNotFound(int id) {
        return new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Role #%d Not Found.", id));
    }

    /**
     * Message reporting that the role field has not been specified
     * @return ResponseStatusException message.
     */
    public ResponseStatusException nullRole() {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, "Empty Role.");
    }

    /**
     * Message reporting that the username already exists in the database.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException duplicateUsername() {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username Taken.");
    }

    /**
     * Message reporting that an attempt to delete a user has failed due to the fact that the user is trying to delete
     * their own credentials.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException deleteYourself() {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cannot Delete.");
    }

    /**
     * Message reporting that a server error has occurred.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException serverError() {
        return new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Server Error.");
    }

    /**
     * Message reporting that a string must consist of a minimum length of characters.
     * @param name Specified string field name.
     * @param length Specified minimum length.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException minLength(String name, int length) {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, String.format("\"%s\" is too short. Required length is %d", name, length));
    }

    /**
     * Message reporting that a provided field is generated by us and must not be given.
     * @param name Specified string field name.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException provideId(String name) {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, String.format("\"%s\" Exists.", name));
    }

    /**
     * Message reporting that a provided field is invalid.
     * @param name Specified string field name.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException invalidField(String name) {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, String.format("\"%s\" is invalid.", name));
    }

    /**
     * Message reporting that the user has provided an invalid input.
     * @return ResponseStatusException message.
     */
    public ResponseStatusException invalidInput() {
        return new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Input");
    }


    public ResponseStatusException sessionExpired() {
        return new ResponseStatusException(HttpStatus.FORBIDDEN, "Session Expired");
    }
}
