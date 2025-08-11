import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-emprunts',
  templateUrl: './emprunts.component.html',
  styleUrl: './emprunts.component.css'
})
export class EmpruntsComponent implements OnInit {

  empruntsList: any[] = [];
  showModal: boolean = false;
  

  constructor( private livreService: LivreService) {}
  ngOnInit(): void {
    this.fetchEmprunts();
  }

  fetchEmprunts(): void {
    this.livreService.getEmprunts().subscribe(emprunts => {

      if (emprunts && emprunts.length > 0){
        console.log('Emprunts reçus:', emprunts); 
          // Récupérer les IDs des livres pour obtenir leurs détails
      const livreIds = emprunts.map(emprunt => {
          console.log('Emprunts:',emprunt);
          return emprunt.livre.id;
      });
      console.log('livreIds', livreIds);
       // Créer une liste d'observables pour obtenir les détails des livres
       const livreRequests = livreIds.map(id => this.livreService.getLivreById(id));
           // Utiliser forkJoin pour attendre que toutes les requêtes soient terminées
      forkJoin(livreRequests).subscribe(livres => {
        // Associer chaque emprunt avec le livre correspondant
        this.empruntsList = emprunts.map(emprunt => ({
          ...emprunt,
          livre: livres.find(livre => livre.id === emprunt.livre.id)
        }));
      });
    }});

  
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
  returnBook(empruntId: number): void {
    if (confirm('Êtes-vous sûr de vouloir rendre ce livre ?')) {
      this.livreService.deleteEmpruntById(empruntId).subscribe(() => {
        console.log('Livre retourné avec succès');
        this.fetchEmprunts();
      }, error => {
        console.error('Erreur lors du retour du livre:', error);
      });
    }
  }

  }



