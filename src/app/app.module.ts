import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LivresComponent } from './components/livres/livres.component';
import { LivreCardComponent } from './components/livre-card/livre-card.component';
import { LivreService } from './services/livre.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivresComponent,
    LivreCardComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
