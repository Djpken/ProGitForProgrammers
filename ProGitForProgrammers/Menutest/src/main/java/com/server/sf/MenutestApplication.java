package com.server.sf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class MenutestApplication {

	public static void main(String[] args) {
		SpringApplication.run(MenutestApplication.class, args);
	}

}
