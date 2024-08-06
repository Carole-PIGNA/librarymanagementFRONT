import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private apiUrl = '/api/v1/livre/getlivres';

  constructor( private http: HttpClient) { }

   getLivres(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?limit=60`);
  }    

}
