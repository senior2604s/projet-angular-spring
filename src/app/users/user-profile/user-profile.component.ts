import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Récupérer les informations de l'utilisateur authentifié
    this.user = { email: 'user@example.com', password: '' }; // Exemple statique
  }

  logout(): void {
    this.authService.logout();
  }
}
