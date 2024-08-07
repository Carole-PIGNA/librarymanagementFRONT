import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LivresComponent } from './components/livres/livres.component';
import { LivreCardComponent } from './components/livre-card/livre-card.component';
import { LivreService } from './services/livre.service';
import { AddlivreComponent } from './components/addlivre/addlivre.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivresComponent,
    LivreCardComponent,
    AddlivreComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
  ],
  providers: [LivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
