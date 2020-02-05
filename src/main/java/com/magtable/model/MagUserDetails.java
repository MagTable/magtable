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

    public MagUserDetails(User user){
        this.username = user.getUsername();
        this.password = user.getPassword();
        //todo this is kinda strange -> We're expecting a Role string
        //this.authorities = Arrays.stream(user.getUserLevelID())

    }

    public MagUserDetails(){

    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        throw new NotImplementedException();
    }

    @Override
    public boolean isAccountNonLocked() {
        throw new NotImplementedException();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        throw new NotImplementedException();
    }

    @Override
    public boolean isEnabled() {
        throw new NotImplementedException();
    }
}
