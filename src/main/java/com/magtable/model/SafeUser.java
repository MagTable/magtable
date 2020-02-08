package com.magtable.model;

import java.io.Serializable;

/**
 * Class for User objects with no password for safety
 * @author David
 *
 */

public class SafeUser implements Serializable {


    /** PARAMETERS **/

    private int id;

    private String username;

    private Role role;

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
