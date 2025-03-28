package com.innotechfusion.election.services;

import java.util.List;

import com.innotechfusion.election.models.Membre;

public interface MembreService {
	
	public List<Membre> findAll();

	public Membre findById(int id);

	public int create(Membre membre);



}
