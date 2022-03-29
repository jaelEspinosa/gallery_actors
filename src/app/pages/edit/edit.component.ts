import { Router, ActivatedRoute } from '@angular/router';

import { ActorsService } from 'src/app/shared/actors.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  actorsForm: FormGroup

  public submitted:boolean= false;
  public createdActor:any;
  public actorID:any=this.actorsService.data._id;
  constructor(private formBuilder: FormBuilder,public actorsService: ActorsService, public router:Router, public route:ActivatedRoute) {
    this.actorsForm =this.formBuilder.group(
      {
        name:[this.actorsService.data.name,[Validators.required]],
        charact:[this.actorsService.data.charact,[Validators.required]],
        img:[this.actorsService.data.img,[Validators.required]],
        age:[this.actorsService.data.age],
        description:[this.actorsService.data.description,[Validators.required, Validators.minLength(8)]],
        link:[this.actorsService.data.link,[Validators.required]]
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
      this.createdActor = newActor;
     /*  console.log('Este seria el nuevo Actor: ',newActor)
      this.createdActor = newActor;
      console.log('y este el que mandamos al servicio',this.createdActor);*/
      console.log(this.actorID)

       // this.actorsService.postActors(this.createdActor).subscribe();        // esto es el post que luego tengo que activar

        this.actorsService.putActor(newActor, this.actorID).subscribe()
        setTimeout(() => {
          this.router.navigate(['/actors'])
        }, 1500);

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
