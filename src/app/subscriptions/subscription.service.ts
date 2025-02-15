import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from './subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = 'api/subscriptions';

  constructor(private http: HttpClient) {}

  exportSubscriptions(startDate: string, endDate: string): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${this.apiUrl}/export?start=${startDate}&end=${endDate}`);
  }
}
