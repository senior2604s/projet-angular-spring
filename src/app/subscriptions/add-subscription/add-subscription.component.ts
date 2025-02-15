import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from '../subscription.service';
import { ClientService } from '../../clients/client.service';
import { OfferService } from '../../offers/offer.service';
import { Subscription } from '../subscription.model';
import { Client } from '../../clients/client.model';
import { Offer } from '../../offers/offer.model';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.css']
})
export class AddSubscriptionComponent implements OnInit {
  subscription: Subscription = { id: 0, clientId: 0, offerId: 0, dateDebut: new Date(), dateFin: new Date() };
  clients: Client[] = [];
  offers: Offer[] = [];

  constructor(
    private subscriptionService: SubscriptionService,
    private clientService: ClientService,
    private offerService: OfferService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
    this.offerService.getOffers().subscribe(offers => this.offers = offers);
  }

  addSubscription(): void {
    this.subscriptionService.addSubscription(this.subscription).subscribe(() => {
      this.router.navigate(['/subscriptions']);
    });
  }
}
