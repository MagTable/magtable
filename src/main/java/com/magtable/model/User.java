package com.magtable.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
//@Table annotation is used to provide the details of the table that this entity will be mapped to
@Table(name = "users")
//Entity Listener is for if we want to auto populate some fields with jpa -> for example a date_created field
//@EntityListeners(AuditingEntityListener.class)
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

    //@NotBlank annotation is used to validate that the annotated field is not null or empty.
    // @TODO COULDN't GET NOTBLANK TO WORK FIX LATER
    // @NotBlank
    private int userLevelID;

    // @NotBlank
    private String username;

    // @NotBlank
    private String password;

    //Emtpy Constructor that JPA uses
    protected User() {
    }

    /**
     * HELPER METHODS
     **/

    // @TODO I have no idea what this method is supposed to do
    /*
     * @ Above - Userlevel wouldn't necessarily be an attribute of User based on the ERD
     * JPA would probably resolve this method on it's own so this method may not need to be implemented
     */
//    public String getUserLevel() {
//        return "not implemented";
//    }

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

    /*
    //@Column annotation is used to define the properties of the column that will be mapped to
    // the annotated field. You can define several properties like name, length, nullable, updateable etc.
    @Column(nullable = false, updatable = false)
    //@Temporal annotation is used with java.util.Date and java.util.Calendar classes. It converts the date and time values from Java Object to compatible database type and vice versa.
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdOn;
*/


}
