import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/shared/actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
actors : any;
  constructor(private actorsService: ActorsService) { }

  ngOnInit(): void {
    this.actorsService.getActors().subscribe((res:any)=>{
      console.log('esto es res',res)
      this.actors = res;
      console.log('esto es actors', this.actors)
    })
  }

}
