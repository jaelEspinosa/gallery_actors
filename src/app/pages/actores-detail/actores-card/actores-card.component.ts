import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actores-card',
  templateUrl: './actores-card.component.html',
  styleUrls: ['./actores-card.component.scss']
})
export class ActoresCardComponent implements OnInit {
  @Input() actor:any
  constructor() { }

  ngOnInit(): void {
  }

}
