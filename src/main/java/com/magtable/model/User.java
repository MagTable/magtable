package com.magtable.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Random;


/**
 * Entity Class for User Table
 */
@Entity
public class User implements Serializable {
    private final int TEMPORARY_PASSWORD_LENGTH = 8;

    private Integer id;
    private String username;
    private String password;
    private Role role;
    private boolean reset;

    public User(){}

    public User(User user) {
        this.reset = user.isReset();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer userId) {
        this.id = userId;
    }

    @Basic
    @Column(name = "username", length = 32)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "password", length = 60)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "resetflag")
    public boolean isReset() {
        return reset;
    }

    public void setReset(boolean reset) {
        this.reset = reset;
    }

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "role", referencedColumnName = "roleId")
    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) &&
                Objects.equals(username, user.username) &&
                Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password);
    }


    @Override
    public String toString() {
        return "User{" +
                "userId=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role +
                ", reset=" + reset +
                '}';
    }

    /*
     * HELPER METHODS
     */
    /**
     * Generates a random string with a given length. Only uses lowercase English alphabet characters.
     * @return The randomly generated password.
     */

//    public void generateResetPassword() {
//        char[] charArray = new char[TEMPORARY_PASSWORD_LENGTH]; // using a char array to build the random string
//
//        Random r = new Random();
//
//        int asciiOffset = 97; // this is where the lower-case english alphabet starts in the ascii table
//        int asciiLength = 26; // this is the range of ascii characters we want, starting from the offset
//
//        for (int i = 0; i < charArray.length; i++) {
//            int randint = r.nextInt(asciiLength) + asciiOffset;
//            charArray[i] = (char) randint; // cast our random int to char and add it to charArray
//        }
//
//        String randomPassword = new String(charArray); // convert random char array to String
//        this.setPassword(randomPassword); // set user's resetPassword to newly generated random string
//        this.setReset(true);
//
//    }

}
