import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer } from '../offer.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  offers: Offer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(offers => {
      this.offers = offers;
    });
  }
}
