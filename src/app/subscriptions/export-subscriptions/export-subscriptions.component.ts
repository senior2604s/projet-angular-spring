import { Component } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription.model';

@Component({
  selector: 'app-export-subscriptions',
  templateUrl: './export-subscriptions.component.html',
  styleUrls: ['./export-subscriptions.component.css']
})
export class ExportSubscriptionsComponent {
  startDate: string = ''; // Déclaration de startDate
  endDate: string = ''; // Déclaration de endDate
  subscriptions: Subscription[] = [];

  constructor(private subscriptionService: SubscriptionService) {}

  exportSubscriptions(): void {
    this.subscriptionService.exportSubscriptions(this.startDate, this.endDate).subscribe(subscriptions => {
      this.subscriptions = subscriptions;
    });
  }
}
