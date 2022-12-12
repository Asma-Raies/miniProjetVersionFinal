import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MakeUp';
  constructor (public authService: AuthService) {}
  onLogout(){
    this.authService.logout();
  }
}
