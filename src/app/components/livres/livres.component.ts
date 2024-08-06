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

  constructor(private livreService: LivreService){}

  ngOnInit(): void {
    
  this.livreService.getLivres().subscribe(
    data =>{
      console.log('Data from API:', data);
      this.livreList = data;
      
    },
    error =>{
      console.error(" Error fetching List of Books",error);
    }
  )
  }
}
