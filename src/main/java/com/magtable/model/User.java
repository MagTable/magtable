package com.magtable.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "magtabledev", catalog = "")
public class User {
    private Long userId;
    private byte levelId;
    private String username;
    private String password;

    @Id
    @Column(name = "userID")
    public Long getId() {
        return userId;
    }

    public void setId(Long userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "levelID")
    public byte getLevelId(){
        return levelId;
    }

    public void setLevelId(byte levelId){
        this.levelId = levelId;
    }




    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User that = (User) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(username, that.username) &&
                Objects.equals(password, that.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, username, password);
    }
}
