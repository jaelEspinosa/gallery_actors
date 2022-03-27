import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { FooterComponent } from './core/footer/footer.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { ActoresDetailComponent } from './pages/actores-detail/actores-detail.component';
import { ActoresCardComponent } from './pages/actores-detail/actores-card/actores-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActorsComponent,
    GestionComponent,
    NavigatorComponent,
    FooterComponent,
    GalleryComponent,
    ActoresDetailComponent,
    ActoresCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
