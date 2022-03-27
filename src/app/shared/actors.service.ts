import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  getActors(){
    return this.http.get('http://localhost:5000/actores');
  }

}
/* https://api-liga-equipos-futbol.vercel.app/jugadores */
