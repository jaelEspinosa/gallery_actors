import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  getActors(){
    return this.http.get('https://ators-api-jaelespinosa.vercel.app/actores');
  }

}

// DESPLEGADO

/* https://ators-api-jaelespinosa.vercel.app/actores */


//LOCAL

/* http://localhost:5000/actores */
