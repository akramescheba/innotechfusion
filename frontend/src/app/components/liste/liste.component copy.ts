import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";

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
  apiUrl = 'http://localhost:8082/membres'; 


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Récupération de la liste des membres depuis l'API
    this.http.get<any[]>(this.apiUrl).subscribe(
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
  }

  // Fonction pour enregistrer le vote d'un membre
  voter(id: number): void {
    if (!this.voted[id]) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.patch(`${this.apiUrl}/${id}`, { vote: "À voté" }, { headers }).subscribe(
        () => {
          this.voted[id] = true; 
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
