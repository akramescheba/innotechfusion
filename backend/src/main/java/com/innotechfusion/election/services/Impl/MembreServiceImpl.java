package com.innotechfusion.election.services.impl;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.innotechfusion.election.dao.MembreRepository;
import com.innotechfusion.election.execption.EntityDontExistExeption;
import com.innotechfusion.election.models.Membre;
import com.innotechfusion.election.services.MembreService;

@Service
public class MembreServiceImpl implements MembreService{
@Autowired(required=true)
private MembreRepository membreRepository;
	@Override
	public List<Membre> findAll() {
		List<Membre> membres = new ArrayList<Membre>();
		membreRepository.findAll().forEach(membres::add);
		
		return membres;

	}
	@Override
	public Membre findById(int id) {
		Optional<Membre> membre = membreRepository.findById(id);
		if(membre.isPresent()) {
			return membre.get();
		}
		throw new EntityDontExistExeption();
	}
	@Override
	public int create(Membre membre) {
		return membreRepository.save(membre).getId();
	}
	@Override
	public void updatePartial(int id, Membre membreExistant, Membre newMembre) {
		
		if(newMembre.getVote() !=null) {
			membreExistant.setVote(newMembre.getVote());
		}
	membreRepository.save(membreExistant);	
	}
}
