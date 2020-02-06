package com.magtable.model;

import java.io.Serializable;

/**
 * Class for User objects with no password for safety
 * @author David
 *
 */

public class SafeUser implements Serializable {


    /** PARAMETERS **/

    private Long id;

    private String username;

    private int levelId;

    /** CONSTRUCTORS **/

    /**
     * Copy Constructor to sanitize the password from User model
     * @param user - the user to copy
     */
    public SafeUser(User user){
    this.id = user.getId();
    this.username = user.getUsername();
    this.levelId = user.getLevelId();
    }

    /**
     * GETTERS
     */

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public int getLevelId() {
        return levelId;
    }
}
