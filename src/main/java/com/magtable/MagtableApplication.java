package com.magtable;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class MagtableApplication {

    public static void main(String[] args) {
        SpringApplication.run(MagtableApplication.class, args);
    }

}
