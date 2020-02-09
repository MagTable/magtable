package com.magtable.model;

import java.io.Serializable;

/**
 * Class for User objects with no password for safety
 * @author David
 */

public class ResetUser implements Serializable {


    /**
     * PARAMETERS
     **/

    private final String username;

    private final Role role;

    private String resetPassword;

    /** CONSTRUCTORS **/

    /**
     * Copy Constructor to sanitize the password from User model
     * @param user - the user to copy
     */
    public ResetUser(User user) {
        this.username = user.getUsername();
        this.role = user.getRole();
        this.resetPassword = generateResetPassword();
    }

    /**
     * GETTERS
     */

    public String getUsername() {
        return username;
    }

    public Role getRole() {
        return role;
    }

    public String getResetPassword(){
        return resetPassword;
    }

    /**
     * HELPER METHODS
     */

    private String generateResetPassword(){
        //TODO MAKE RANDOM
        return "123456";
    }

}
