import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:8082/membres';

  constructor(private http: HttpClient) { }
  getDataApi(){
    this.http.get(`${this.apiUrl}`)
  }
  // postMembre(membreData:any){
  //   this.http.post<any>(`${this.apiUrl}`, membreData)
  // }
  patchDataApi(id: number, patchData:any){
    this.http.patch(`${this.apiUrl}/${id}`, patchData)
  }
}
