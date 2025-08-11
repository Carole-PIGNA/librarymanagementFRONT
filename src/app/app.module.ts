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
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { EmpruntsComponent } from './emprunts/emprunts.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivresComponent,
    LivreCardComponent,
    AdminComponent,
    EmpruntsComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [LivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
