import { ToastService } from './../../../shared/toast.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ActorsService } from 'src/app/shared/actors.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actores-card',
  templateUrl: './actores-card.component.html',
  styleUrls: ['./actores-card.component.scss']
})
export class ActoresCardComponent implements OnInit {
  @Input() actor:any
  constructor(private toastService:ToastService, private route: ActivatedRoute,private actorsService: ActorsService,private router:Router) { }

  ngOnInit(): void {
  }
  deleteActor(){
    this.route.paramMap.subscribe(params =>{
      this.actorsService.deleteActorsById(params.get("ActorID")).subscribe(actor =>{
      this.actor = actor
      console.log(actor)
      setTimeout(() => {
        this.router.navigate(['/actors'])
      }, 2000);


     })
    })
  this.toastService.messageObs$ = {
    tittle : "ELEMENTO ELIMINADO",
    description: 'CON ÉXITO',
    color: '#998061'
  }

  }

  editActor(item:any){
this.actorsService.updateInfo(item);
this.router.navigate(['/edit'])
  }
}
