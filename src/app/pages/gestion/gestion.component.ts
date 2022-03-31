import { ToastService } from './../../shared/toast.service';
import { Router, ActivatedRoute } from '@angular/router';

import { ActorsService } from 'src/app/shared/actors.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  actorsForm: FormGroup

  public submitted:boolean= false;
  public createdActor:any;


  constructor(private toastService: ToastService,private formBuilder: FormBuilder,public actorsService: ActorsService, public router:Router, public route:ActivatedRoute) {
    this.actorsForm =this.formBuilder.group(
      {
        name:['',[Validators.required]],
        charact:['',[Validators.required]],
        img:['',[Validators.required]],
        age:[''],
        description:['',[Validators.required, Validators.minLength(8)]],
        link:['',[Validators.required]]
      }
    )
  }
  onSubmit(){
    console.log("este es el error que mando ",this.actorsForm.controls['name'].errors)
    this.submitted = true
    if (this.actorsForm.valid){
      const newActor:any = {
        name: this.actorsForm.get('name')?.value,
        charact: this.actorsForm.get('charact')?.value,
        img: this.actorsForm.get('img')?.value,
        age: this.actorsForm.get('age')?.value,
        description: this.actorsForm.get('description')?.value,
        link: this.actorsForm.get('link')?.value

      }
     /*  console.log('Este seria el nuevo Actor: ',newActor)
      this.createdActor = newActor;
      console.log('y este el que mandamos al servicio',this.createdActor);*/

     this.createdActor = newActor;
     this.toastService.messageObs$ = {
      tittle : "ELEMENTO GUARDADO",
      description: 'CON ÉXITO',
      color: '#97e997'
    }


     this.actorsService.postActors(this.createdActor).subscribe();        // esto es el post que luego tengo que activar
     setTimeout(() => {
      this.router.navigate(['/actors'])
    }, 2000);



    }


    /* console.log(this.actorsForm)

    console.log(this.actorsForm.value) */
  }
  ngOnInit(): void {
      this.actorsForm.valueChanges.subscribe((changes)=>{
      /* console.log(changes) */
      this.createdActor = changes
      /* console.log('estos son ',this.createdActor) */
    })


  }

}
