import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addlivre',
  templateUrl: './addlivre.component.html',
  styleUrl: './addlivre.component.css'
})
export class AddlivreComponent {
  bookForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.bookForm = this.fb.group({
      title:[''],
      author:[''],
      pub_date:[''],
      genre:[''],
      image:[null]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.bookForm.get('title')?.value);
    formData.append('author', this.bookForm.get('author')?.value);
    formData.append('pub_date', this.bookForm.get('pub_date')?.value);
    formData.append('genre', this.bookForm.get('genre')?.value);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.http.post('http://localhost:8081/api/v1/livre/postlivre', formData).subscribe(response => {
      console.log(response);
    }, error => {
      console.error('Erreur:', error);
        });
  }



}
