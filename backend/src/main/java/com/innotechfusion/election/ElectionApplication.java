package com.innotechfusion.election;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.innotechfusion.election.services.Impl")
public class ElectionApplication {

	public static void main(String[] args) {
		SpringApplication.run(ElectionApplication.class, args);
	}

}
