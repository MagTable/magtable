package com.magtable.model;

import java.io.Serializable;
import java.util.Random;

/**
 * Class for User objects with no password for safety
 * @author David
 */

public class ResetUser implements Serializable {


    /**
     * PARAMETERS
     **/

    private final int TEMPORARY_PASSWORD_LENGTH = 8;

    private Integer id;

    private final String username;

    private final Role role;

    private String resetPassword;

    /* CONSTRUCTORS */

    /**
     * Copy Constructor to sanitize the password from User model
     * @param user - the user to copy
     */
    public ResetUser(User user) {
        this.username = user.getUsername();
        this.role = user.getRole();
//        this.resetPassword = generateResetPassword(TEMPORARY_PASSWORD_LENGTH);
        this.id = user.getUserId();
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

    public Integer getId() {
        return id;
    }

}
