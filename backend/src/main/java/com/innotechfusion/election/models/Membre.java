package com.innotechfusion.election.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="membre")
@Entity
public class Membre {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int ddn;
	private String nom;
	private String prenom;
	private String vote;

	
	
	public String getVote() {
		return vote;
	}
	public void setVote(String vote) {
		this.vote = vote;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getDdn() {
		return ddn;
	}
	public void setDdn(int ddn) {
		this.ddn = ddn;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}



}
