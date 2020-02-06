package com.magtable.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

public class MagUserDetails implements UserDetails {


    private String password;
    private String username;
    private List<GrantedAuthority> authorities;

    public MagUserDetails(String username){
        this.username = username;
    }

    public MagUserDetails(User user){

    }

    public MagUserDetails(){

    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        //1 for system admin
        return Arrays.asList(new SimpleGrantedAuthority("1"));
    }

    @Override
    public String getPassword() {
        return "pass";
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
