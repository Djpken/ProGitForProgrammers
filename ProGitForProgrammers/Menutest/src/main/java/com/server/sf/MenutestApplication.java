package com.server.sf;

import java.util.TimeZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
@EnableJpaAuditing
public class MenutestApplication {
	 @PostConstruct
	    void started() {
		 TimeZone.setDefault(TimeZone.getTimeZone("GMT+8"));
	    }

	public static void main(String[] args) {
		SpringApplication.run(MenutestApplication.class, args);
	}

}
