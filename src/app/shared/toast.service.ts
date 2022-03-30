import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

/* #defaultMessage = {
  titulo: "soy un titulo",
  description:"soy una descripción",
  color: "red"
} */


#messageObs$:any = new Subject();


constructor() { }

get messageObs$() {
  return this.#messageObs$;
}

set messageObs$(newValue){
  this.#messageObs$.next(newValue)
}

}
