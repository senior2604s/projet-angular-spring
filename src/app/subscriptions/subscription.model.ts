export interface Subscription {
    id: number;
    clientId: number;
    offerId: number;
    dateDebut: Date;
    dateFin: Date;
  }
  
  exportSubscriptions(startDate: string, endDate: string): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${this.apiUrl}/export?start=${startDate}&end=${endDate}`);
  }
    