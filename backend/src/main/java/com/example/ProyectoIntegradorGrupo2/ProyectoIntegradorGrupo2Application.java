package com.example.ProyectoIntegradorGrupo2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ProyectoIntegradorGrupo2Application {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoIntegradorGrupo2Application.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
								.allowedOrigins("http://localhost:8080","https://d1hx9yhvlj2zs6.cloudfront.net","http://d1hx9yhvlj2zs6.cloudfront.net", "http://localhost:3000").allowedMethods("*").allowedHeaders("*");
			}
		};
	}

	@Bean
	PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}
}
