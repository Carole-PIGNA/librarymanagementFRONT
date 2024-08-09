import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livre-card',
  templateUrl: './livre-card.component.html',
  styleUrl: './livre-card.component.css'
})
export class LivreCardComponent  implements OnInit  {

  @Input() livre: any;
  @Input() hideButton: boolean = false; 
  showBorrowForm: boolean = false; // Pour contrôler l'affichage du formulaire
  borrowForm: FormGroup;


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.borrowForm = this.fb.group({
      borrowerName: ['']
    });
  
  }
  ngOnInit(): void {}

  getImageUrl(imagePath: string): string {
    return `http://localhost:8081/images/${imagePath}`;
  }
  toggleBorrowForm(): void {
    this.showBorrowForm = !this.showBorrowForm;
  }
  onBorrowSubmit(): void {
    if (this.borrowForm.valid) {
      const borrowerName = this.borrowForm.get('borrowerName')?.value;
      console.log(`Livre emprunté par : ${borrowerName}`);

      const formData = new FormData();
      formData.append('livreId', this.livre.id);
      formData.append('emprunteur',borrowerName);

      this.http.post('http://localhost:8081/api/v1/emprunt', formData).subscribe(response => {
        console.log(response);
        this.borrowForm.reset();
        this.showBorrowForm = false;
      }, error => {
        console.error('Erreur:', error);
          });

    }
  }




}
