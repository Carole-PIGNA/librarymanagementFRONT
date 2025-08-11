import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

<<<<<<< HEAD
  private apiUrl = 'http://localhost:8081/api/livre/getlivres';
=======
  private apiUrl = 'http://localhost:8081/api/v1/livre/getlivres';
>>>>>>> origin/main

  constructor( private http: HttpClient) { }

   getLivres(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?limit=60`);
  }  
  getEmprunts(): Observable<any[]> {
<<<<<<< HEAD
    return this.http.get<any[]>(`http://localhost:8081/api/emprunt`);
=======
    return this.http.get<any[]>(`http://localhost:8081/api/v1/emprunt`);
>>>>>>> origin/main
  }  
  getLivreById(livreId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${livreId}`)
    .pipe(
      catchError(this.handleError)  // gestion des erreurs
    );

  }

  deleteEmpruntById(empruntId: number):Observable<any> {
<<<<<<< HEAD
    return this.http.delete(`http://localhost:8081/api/emprunt/${empruntId}`);
=======
    return this.http.delete(`http://localhost:8081/api/v1/emprunt/${empruntId}`);
>>>>>>> origin/main
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Une erreur côté client ou réseau s'est produite
      console.error('An error occurred:', error.error.message);
    } else {
      // Le backend a retourné un code d'erreur inattendu
      console.error(`Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`);
    }
    // renvoie une observable avec un message d'erreur
    return throwError('Something bad happened; please try again later.');
  }

}
