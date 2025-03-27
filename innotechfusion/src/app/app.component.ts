import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'innotechfusion';

  constructor(private http: HttpClient){}

  list:any[]=[];

  voted: {[id:number]: boolean}={};

  ngOnInit(): void{
    this.http.get<any>("http://localhost:8082/membres").subscribe((data)=>
    this.list=data)
    const vote = localStorage.getItem('Token');
    
    if (vote) {
      this.voted = JSON.parse(vote);
    }
  }

  voter(id:number): void{
    this.voted[id]=true;
    localStorage.setItem('Token', JSON.stringify(this.voted))
  }
  

}
