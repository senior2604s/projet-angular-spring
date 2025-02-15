import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private apiUrl = 'api/stats';

  constructor(private http: HttpClient) {}

  getActiveClientsCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/active-clients-count`);
  }

  getEstimatedMonthlyRevenue(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/monthly-revenue`);
  }
}
