import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getToken().subscribe((token) => {
      this.isLoggedIn = !!token;
    });
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
