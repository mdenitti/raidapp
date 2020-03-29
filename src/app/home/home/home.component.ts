import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quote } from '../../shared/model/quotes.model';
import { Organisation } from '../../shared/model/organisations.model';
import { Contact } from '../../shared/model/contacts.model';
import { Product } from '../../shared/model/products.model';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes$: Observable<Quote[]>;
  contacts$: Observable<Contact[]>;
  organisations$: Observable<Organisation[]>;
  products$: Observable<Product[]>;
  organisationsArr = [];
  organisationsArrLength: number;
  contactsArr = [];
  contactsArrLength: number;


  constructor(private ApiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.quotes$ = this.ApiService.getQuotes();
    this.contacts$ = this.ApiService.getContacts();
    this.organisations$ = this.ApiService.getOrganisations();
    this.products$ = this.ApiService.getProducts();

    this.ApiService.getOrganisations().subscribe((orgRes: any[]) => {
      this.organisationsArr = orgRes;
      this.organisationsArrLength = this.organisationsArr.length;
    });

    this.ApiService.getContacts().subscribe((contactRes: any[]) => {
      this.contactsArr = contactRes;
      this.contactsArrLength = this.contactsArr.length;
    });
  }



  toStats() {
    this.router.navigate(['main/charts']);
  }

  toOrg() {
    this.router.navigate(['main/organisations']);
  }

  toContacts() {
    this.router.navigate(['main/contacts']);
  }

  toProducts() {
    this.router.navigate(['main/products']);
  }

  toInvoices() {
    this.router.navigate(['main/quotes']);
  }

}
