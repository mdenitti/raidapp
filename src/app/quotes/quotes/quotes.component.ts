import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/firebaseauth.service';
import { Quote } from '../../shared/model/quotes.model';
import { Organisation } from '../../shared/model/organisations.model';
import { Contact } from '../../shared/model/contacts.model';
import { Product } from '../../shared/model/products.model';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes$: Observable<Quote[]>;
  contacts$: Observable<Contact[]>;
  organisations$: Observable<Organisation[]>;
  products$: Observable<Product[]>;
  addQuotes$: Observable<Quote[]>;
  showNew: Boolean = false;

  quotenumber: number;
  organisationsid: number;
  contactsid: number;
  productid: number;
  ponumber: number;
  price: number;
  discount: number;
  transport: number;
  invoice: boolean = false;
  send: boolean = false;
  serviced: boolean = false;
  payed: boolean = false;

  quoteId: number;

  onSave() {
    /* this.invoice = true ? 0 : 1;
    this.send = true ? 0 : 1;
    this.serviced = true ? 0 : 1;
    this.payed = true ? 0 : 1; */
    console.log(this.quotenumber, this.organisationsid, this.contactsid, this.productid, this.ponumber, this.price, this.discount, this.transport, this.invoice, this.send, this.serviced, this.payed)
    const newQuoteJSON = new Quote(
      null,
      this.quotenumber,
      this.organisationsid,
      this.contactsid,
      this.productid,
      this.ponumber,
      this.price,
      this.discount,
      this.transport,
      this.invoice,
      this.send,
      this.serviced,
      this.payed
    );
    console.log(newQuoteJSON);
    this.ApiService.addQuoteJSON(newQuoteJSON).subscribe();
    this.router.navigate(['main/quotesadd']);
  }

  onDelete(quoteId) {
    console.log(quoteId);
    this.ApiService.deleteOrganisation(quoteId).subscribe(
      (data) => {
        this.router.navigate(['/quote']);
      }
    );
    this.router.navigate(['main/quotes']);
  }


  constructor(private ApiService: ApiService, public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.quotes$ = this.ApiService.getQuotes();
    this.contacts$ = this.ApiService.getContacts();
    this.organisations$ = this.ApiService.getOrganisations();
    this.products$ = this.ApiService.getProducts();
    console.log(this.quotes$);
  }

  onNew() {
    // display registration entry section.
    this.showNew = true;
  }

  onCancel() {
    this.showNew = false;
  }

  onEdit(id) {
    this.ApiService.findQuote(id).subscribe();
    this.quoteId = id;
    console.log(this.quoteId);
    /* this.router.navigate(['main/edit']); */
  }

  editInput(id) {
    this.router.navigate(['/quotesedit/' + id]);
  }

  deleteInput(id) {
    this.router.navigate(['/quotesdelete/' + id]);
  }

}
