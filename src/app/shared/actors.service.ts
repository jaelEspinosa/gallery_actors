import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  data:any;

  getActors(){
    return this.http.get('https://ators-api.vercel.app/actores');
  }
  postActors(createdActor:any){

     return this.http.post("https://ators-api.vercel.app/actores", createdActor)
  }
  getActorsById(actorID:any){

    return this.http.get('https://ators-api.vercel.app/actores/' + actorID)

  }
  deleteActorsById(actorID:any){
    return this.http.delete('https://ators-api.vercel.app/actores/delete/' + actorID)
  }



updateInfo(item:any){
  this.data = item;
  console.log('desde el servicio',this.data)
}

putActor(editedActor:any, actorID:any){
  return this.http.put('https://ators-api.vercel.app/actores/update/'+actorID, editedActor)

}

}




// DESPLEGADO

/* https://ators-api-jaelespinosa.vercel.app/actores */



//LOCAL

/* http://localhost:5000/actores */
