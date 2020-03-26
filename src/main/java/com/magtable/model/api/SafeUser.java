package com.magtable.model.api;

import com.magtable.model.entities.Role;
import com.magtable.model.entities.User;

import java.io.Serializable;

/**
 * Class for User objects with no password for safety
 * @author David Ward
 */
public class SafeUser implements Serializable {


    /**
     * PARAMETERS
     **/

    private final int TEMPORARY_PASSWORD_LENGTH = 8;

    private Integer id;

    private final String username;

    private final Role role;

    private boolean reset;

    /* CONSTRUCTORS */

    /**
     * Copy Constructor to sanitize the password from User model
     *
     * @param user - the user to copy
     */
    public SafeUser(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.role = user.getRole();
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

    public boolean isReset() {
        return reset;
    }

}

