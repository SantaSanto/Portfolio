package com.santo.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com.santo.portfolio.repo")
@EntityScan("com.santo.portfolio.model")
@SpringBootApplication
public class PortfolioApplication {

	public static void main(String[] args) {
		System.out.println("Version 2");
		SpringApplication.run(PortfolioApplication.class, args);
	}

}
