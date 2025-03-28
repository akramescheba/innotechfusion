package com.innotechfusion.election.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.innotechfusion.election.models.Membre;
import com.innotechfusion.election.services.MembreService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class MembreController {
	
	@Autowired
	private MembreService membreServices;
	@GetMapping("/membres")
	public  List<Membre> findAll(){
		
		return membreServices.findAll();			
	}
	
	@GetMapping("/membre/{id}")
	public Membre findById(@PathVariable("id") int id) {
		Membre membre = membreServices.findById(id);
		
		if (membre ==null) {
			
		}
		return membre;
		
		
	}
	@PostMapping("membre")
	@ResponseStatus(code=HttpStatus.CREATED)
	public int create(@RequestBody Membre membre) {
		return membreServices.create(membre);
		
	};
	
}
