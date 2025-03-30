import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss',
})
export class ListeComponent implements OnInit {

  title = "innotechfusion";
  
  list: any[] = [];  
  voted: { [id: number]: boolean } = {}; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Récupération de la liste des membres depuis l'API
    this.http.get<any[]>('http://localhost:8082/membres').subscribe(
      (data) => {
        this.list = data;
        // Vérifier qui a déjà voté en fonction du champ "vote"
        this.list.forEach(membre => {
          if (membre.vote === "À voté") {
            this.voted[membre.id] = true;
          }
        });
      },
      (error) => console.error("Erreur lors de la récupération des membres :", error)
    );

    // Récupération des votes stockés en local
    const vote = localStorage.getItem('Token');
    if (vote) {
      this.voted = JSON.parse(vote);
    }
  }

  // Fonction pour enregistrer le vote d'un membre
  voter(id: number): void {
    if (!this.voted[id]) {
      // Envoi de la requête PATCH pour mettre à jour "vote"
      this.http.patch(`http://localhost:8082/membre/${id}`, {vote: "À voté"}).subscribe(
        () => {
          this.voted[id] = true; 
          localStorage.setItem('Token', JSON.stringify(this.voted));
          const membre = this.list.find(m => m.id === id);
          if (membre) {
            membre.vote = "À voté";
          }
        },
        (error) => console.error("Erreur lors du vote :", error)
      );
    }
  }
}
