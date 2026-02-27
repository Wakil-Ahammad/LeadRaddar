package com.leadradar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class LeadRadarApplication {

    public static void main(String[] args) {
        SpringApplication.run(LeadRadarApplication.class, args);
    }
}
