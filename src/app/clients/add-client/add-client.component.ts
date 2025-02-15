import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  client: Client = { id: 0, nom: '', prenom: '', dateInscription: new Date(), abonnementActif: false };

  constructor(private clientService: ClientService, private router: Router) {}

  addClient(): void {
    this.clientService.addClient(this.client).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
