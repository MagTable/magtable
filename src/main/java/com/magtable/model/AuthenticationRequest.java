package com.magtable.model;

import java.io.Serializable;

/**
 * https://github.com/koushikkothagal/spring-security-jwt/blob/master/src/main/java/io/javabrains/springsecurityjwt/models/AuthenticationResponse.java
 */

public class AuthenticationRequest implements Serializable {

    private String username;
    private String password;
    private String newpassword;

    public AuthenticationRequest() {
    }

    public AuthenticationRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public AuthenticationRequest(String username, String password, String newpassword) {
        this.username = username;
        this.password = password;
        this.newpassword = newpassword;
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

    public String getNewpassword(){
        return this.newpassword;
    }
}
