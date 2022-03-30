import { ToastService } from './../toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
 message:any;

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  this.toastService.messageObs$.subscribe((message:any)=>{

    this.message=message

    setTimeout(() => {
      this.message = null
    }, 3000);

  })

  }

}
