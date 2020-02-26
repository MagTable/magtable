package com.magtable;

import com.magtable.services.w2wServices.ShiftScheduler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MagtableApplication {

    public static void main(String[] args) {

        SpringApplication.run(MagtableApplication.class, args);
    }

}
