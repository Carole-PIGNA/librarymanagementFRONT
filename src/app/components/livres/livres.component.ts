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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLivres();

  }

  fetchLivres(){
    this.http.get<any []>('http://localhost:8081/api/v1/livre/getlivres').subscribe(data => {
      this.livreList = data;
    });
  }
  getImageUrl(imagePath: string): string {
    return `http://localhost:8081/images/${imagePath}`;
  }

}

