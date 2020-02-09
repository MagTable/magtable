package com.magtable.model;

import java.io.Serializable;

/**
 * Class for User objects with no password for safety
 * @author David
 *
 */

public class SafeUser implements Serializable {


    /** PARAMETERS **/

    private final int id;

    private final String username;

    private final Role role;

    /** CONSTRUCTORS **/

    /**
     * Copy Constructor to sanitize the password from User model
     * @param user - the user to copy
     */
    public SafeUser(User user){
    this.id = user.getUserId();
    this.username = user.getUsername();
    this.role = user.getRole();
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
}
