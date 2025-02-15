import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from '../offer.service';
import { Offer } from '../offer.model';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent {
  offer: Offer = { id: 0, nom: '', dureeEnMois: 0, prixMensuel: 0 };

  constructor(private offerService: OfferService, private router: Router) {}

  addOffer(): void {
    this.offerService.addOffer(this.offer).subscribe(() => {
      this.router.navigate(['/offers']);
    });
  }
}
