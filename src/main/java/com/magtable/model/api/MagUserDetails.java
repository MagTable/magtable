package com.magtable.model.api;

import com.magtable.model.entities.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Class to override the default Spring Boot UserDetails implementation
 * @author David Ward
 */
public class MagUserDetails implements UserDetails {

    private final String username;
    private final String password;
    private final boolean active;
    private final List<GrantedAuthority> authorities;

    public MagUserDetails(User user) {
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.active = true;
        this.authorities = new ArrayList<>();
        this.authorities.add(new SimpleGrantedAuthority(user.getRole().getName()));
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
        return active;
    }
}
