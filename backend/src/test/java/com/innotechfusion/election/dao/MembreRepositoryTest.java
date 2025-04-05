package com.innotechfusion.election.dao;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import com.innotechfusion.election.models.Membre;
import com.innotechfusion.election.services.impl.MembreServiceImpl;
@ActiveProfiles("test")
@DataJpaTest
public class MembreRepositoryTest {

  @Autowired
  private MembreServiceImpl membreServiceImpl;

  @Test
  //Test finAll
  void shouldFindAllMembre() {
    List<Membre> membres = membreServiceImpl.findAll();
    assertEquals(10, membres.size());
  }

  @Test
  //Test finByyId
  void shouldFindMembreById() {
    Membre membre = membreServiceImpl.findById(6);
    assertEquals("Lefevre", membre.getNom());
  }

  @Test
  //Test de vérification de la méthode patch;
  void shouldPatchVote() {
    Membre voteExistant = membreServiceImpl.findById(7);
    Membre newVote = new Membre();
    newVote.setVote("A voté");
    membreServiceImpl.updatePartial(6, voteExistant, newVote);
  }

  // @Test
  // //Test de vérification de la méthode post;
  // void shouldCreateMembre() {
  //   Membre newMembre = new Membre();
  //   newMembre.setDdn(2005);
  //   newMembre.setNom("AKRA MESCHEBA");
  //   newMembre.setPrenom("Jordy");
  //   newMembre.setVote("voter");
  //   membreServiceImpl.create(newMembre);

  //   assertEquals(2005, newMembre.getDdn());
  // }
}
