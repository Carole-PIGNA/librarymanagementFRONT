import { Component, Input, OnInit, Output } from '@angular/core';
import { LivreService } from '../../services/livre.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.css'
})
export class LivresComponent implements OnInit {

  livreList: any[] = [];
  searchTerm: string ='';
  filteredBooksList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLivres();

  }

  fetchLivres(){
    this.http.get<any []>('http://localhost:8081/api/v1/livre/getlivres').subscribe(data => {
      this.livreList = data;
      this.filteredBooksList = this.livreList;
    });
  }
  getImageUrl(imagePath: string): string {
    return `http://localhost:8081/images/${imagePath}`;
  }

  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredBooksList = this.livreList;
    } else {
      this.filteredBooksList = this.livreList.filter(livre => 
        livre.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        livre.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        livre.genre.toLowerCase().includes(this.searchTerm.toLowerCase())
      
      
      );

    }
  }

  shouldHideImage(): boolean {
    return this.searchTerm.trim() !== '';
  }

  shouldHideHomeComponent(): boolean {
    return false;
  }

}

