import { ActoresDetailComponent } from './pages/actores-detail/actores-detail.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", pathMatch : "full", component:HomeComponent},
  {path:"actors", component:ActorsComponent},
  {path:"gestion", component:GestionComponent},
  {path:"actors/:ActorID", component:ActoresDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
