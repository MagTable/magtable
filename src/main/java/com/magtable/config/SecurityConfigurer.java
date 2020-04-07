package com.magtable.config;


import com.magtable.filters.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


/**
 * Class to override spring security methods
 * @author David Ward
 */
@Configuration
@EnableWebSecurity
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {

    //Qualifer tells Spring too use our UserDetailsService in place of the default UserDetailsService
    @Qualifier("magUserDetailsService")
    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    private JwtRequestFilter JwtRequestFilter;

    private final String SYSTEM_ADMIN = "System Administrator";
    private final String PERSONNEL_MANAGER = "Personnel Manager";
    private final String MECHANIC = "Mechanic";

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/user/*/*").hasAuthority(SYSTEM_ADMIN)
                .antMatchers("/user/*").hasAuthority(SYSTEM_ADMIN)
                .antMatchers("/user*").hasAuthority(SYSTEM_ADMIN)
                .antMatchers("/equipment/*").hasAnyAuthority(SYSTEM_ADMIN, PERSONNEL_MANAGER)
                .antMatchers("/equipment").hasAnyAuthority(SYSTEM_ADMIN, PERSONNEL_MANAGER)
                .antMatchers("/shift/*/*").hasAnyAuthority(SYSTEM_ADMIN, PERSONNEL_MANAGER)
                .antMatchers("/shift/*").hasAnyAuthority(SYSTEM_ADMIN, PERSONNEL_MANAGER, MECHANIC)
                .antMatchers("/shift").hasAnyAuthority(SYSTEM_ADMIN, PERSONNEL_MANAGER, MECHANIC)
                .antMatchers("/authenticate").permitAll()
                .antMatchers("/password/reset").permitAll()
                .antMatchers("/topic/*").hasAnyAuthority(SYSTEM_ADMIN, PERSONNEL_MANAGER, MECHANIC)
                .and().csrf().disable() //TODO Check all route Security /add them
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(JwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

}