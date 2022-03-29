
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorsService } from 'src/app/shared/actors.service';

@Component({
  selector: 'app-actores-detail',
  templateUrl: './actores-detail.component.html',
  styleUrls: ['./actores-detail.component.scss']
})
export class ActoresDetailComponent implements OnInit {
  actor:any;
  actors:any;

  constructor(private route: ActivatedRoute,private actorsService: ActorsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.actorsService.getActorsById(params.get("ActorID")).subscribe(actor =>{
      this.actor = actor
      console.log('este es el actor desde actores-card',actor)
     })
    })

  }
  }

 /*  console.log('esta es la id',actorID)
      console.log('este es el objeto a filtrar',this.actors)
      this.actor =  this.actors.find((singleActor: any) => actorID === singleActor._id)
      console.log('le di click a este?',this.actor) */
