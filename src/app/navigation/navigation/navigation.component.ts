import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/firebaseauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toHome() {
    this.router.navigate(['main/home']);
  }

  toChart() {
    this.router.navigate(['main/charts']);
  }

  toOrg() {
    this.router.navigate(['main/organisations']);
  }

  toCus() {
    this.router.navigate(['main/contacts']);
  }

  toProd() {
    this.router.navigate(['main/products']);
  }

  toInv() {
    this.router.navigate(['main/quotes']);
  }

}
