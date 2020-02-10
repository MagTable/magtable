package com.magtable.model;

import java.io.Serializable;
import java.util.Random;

/**
 * Class for User objects with no password for safety
 * @author David
 */

public class SafeUser implements Serializable {


    /**
     * PARAMETERS
     **/

    private final int TEMPORARY_PASSWORD_LENGTH = 8;

    private Integer id;

    private final String username;

    private final Role role;

    private String resetPassword;

    private boolean reset;

    /* CONSTRUCTORS */

    /**
     * Copy Constructor to sanitize the password from User model
     * @param user - the user to copy
     */
    public SafeUser(User user) {
        this.id = user.getUserId();
        this.username = user.getUsername();
        this.role = user.getRole();
        this.resetPassword = user.getResetPassword();
        this.reset = user.isReset();
    }

    /**
     * GETTERS
     */

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public Role getRole() {
        return role;
    }

    public String getResetPassword() {
        return resetPassword;
    }

}

