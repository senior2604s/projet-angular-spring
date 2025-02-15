import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/auth';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<boolean> {
    // Simuler une réponse de succès pour l'authentification
    return of(true).pipe(
      map(response => {
        localStorage.setItem('authToken', 'dummy-token');
        return true;
      }),
      catchError(() => of(false))
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
