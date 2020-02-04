package com.magtable.model;

import javax.persistence.*;
import java.io.Serializable;


/**
 * Model class for user
 * @author David
 *
 */

//@TODO Class may change when we implement mustafas database.

@Entity
//@Table annotation is used to provide the details of the table that this entity will be mapped to
@Table(name = "users")
// ALL JAVA BEANS ARE SERIALIZABLE!
public class User implements Serializable {

    /**
     * ATTRIBUTES
     **/

    //@Id annotation is used to define the primary key.
    @Id
    //@GeneratedValue annotation is used to define the primary key generation strategy. In the above case, we have declared the primary key to be an Auto Increment field.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int userLevelID;

    private String username;

    private String password;

    //Emtpy Constructor that JPA uses
    protected User() {
    }

    /**
     * GETTERS AND SETTERS
     **/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getUserLevelID() {
        return userLevelID;
    }

    public void setUserLevelID(int userLevelID) {
        this.userLevelID = userLevelID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
