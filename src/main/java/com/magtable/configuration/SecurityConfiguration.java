package com.magtable.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;


/**
 * @author David
 * <p>
 * Class to configure the security for the api routes and JPA authentication
 * <p>
 * Most of this code is from https://www.youtube.com/watch?v=TNt3GHuayXs
 */
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsService userDetailsService;

    //This configure method is used too connect with JPA and authenticate the user on the backend
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        //Authentication managers talk to AuthenticationProvider
        //authentication providers talk to UserDetailsService

        //UserDetailsService gets user information based on the users name
        //WE create the userDetailsService as it is used to validate and find users

        auth.userDetailsService(userDetailsService);

    }

    //Security for the API routes
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        //Spring makes no sense
        //TODO figure out what roles will need access to which routes
        //This annotation with chaining events is called "builder pattern"
        http.authorizeRequests()
                .antMatchers("/user").hasRole("ADMIN")
                .and().formLogin();
    }
}
