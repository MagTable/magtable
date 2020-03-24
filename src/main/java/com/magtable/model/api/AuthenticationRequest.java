package com.magtable.model.api;

import java.io.Serializable;

/**
 * Class for client authentication requests
 * Created with Reference too : "Spring Boot + Spring Security + JWT from scratch - Java Brains" - https://www.youtube.com/watch?v=X80nJ5T7YpE&list=PLqq-6Pq4lTTYTEooakHchTGglSvkZAjnE&index=12 -
 */

public class AuthenticationRequest implements Serializable {

    private String username;
    private String password;
    private String newPassword;

    public AuthenticationRequest() {
    }

    public AuthenticationRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public AuthenticationRequest(String username, String password, String newPassword) {
        this.username = username;
        this.password = password;
        this.newPassword = newPassword;
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

    public String getNewPassword(){
        return this.newPassword;
    }
}
