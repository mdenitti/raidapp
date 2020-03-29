import { Injectable } from '@angular/core';
import { Organisation } from '../model/organisations.model';
import { Contact } from '../model/contacts.model';
import { Product } from '../model/products.model';
import { Quote } from '../model/quotes.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "http://localhost/api/public/api";
  currentOrganisation;
  currentContact;
  currentQuote;
  currentProduct;
  testarray = [];

  constructor(private http: HttpClient) { }
  getOrganisations(): Observable<Organisation[]> {
    return this.http
      .get<Organisation[]>(this.url + "/organisations")
      .pipe(tap(result => console.log(result)));

  }




  findOrganisation(id: number): Observable<Organisation> {
    return this.http
      .get<Organisation>(`${this.url + "/organisations"}/${id}`)
      .pipe(
        //map(result => result[0]),
        tap(result => {
          this.currentOrganisation = result;
          console.log(this.currentOrganisation);
        }))
  }




  getContacts(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(this.url + "/contacts")
      .pipe(tap(result => console.log(result)));
  }

  findContact(id: number): Observable<Contact> {
    return this.http
      .get<Contact>(`${this.url + "/contacts"}/${id}`)
      .pipe(
        //map(result => result[0]),
        tap(result => {
          this.currentContact = result;
          console.log(this.currentContact);
        }))
  }


  getQuotes(): Observable<Quote[]> {
    return this.http
      .get<Quote[]>(this.url + "/quotes")
      .pipe(tap(result => console.log(result)));
  }

  findQuote(id: number): Observable<Quote> {
    return this.http
      .get<Quote>(`${this.url + "/quotes"}/${id}`)
      .pipe(
        //map(result => result[0]),
        tap(result => {
          this.currentQuote = result;
          console.log(this.currentQuote);
        }))
  }


  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.url + "/products")
      .pipe(tap(result => console.log(result)));
  }

  findProduct(id: number): Observable<Product> {
    return this.http
      .get<Product>(`${this.url + "/products"}/${id}`)
      .pipe(
        //map(result => result[0]),
        tap(result => {
          this.currentProduct = result;
          console.log(this.currentProduct);
        }))
  }


  addOrganisationJSON(newOrganisationJSON): Observable<any> {
    console.log(newOrganisationJSON);
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.url + "/organisations", newOrganisationJSON, { headers: headers });
  }

  addContactJSON(newContactJSON): Observable<any> {
    console.log(newContactJSON);
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.url + "/contacts", newContactJSON, { headers: headers });
  }

  deleteOrganisation(value) {
    return this.http.delete(this.url + `/organisations/${value}`)
  }

  deleteContact(value) {
    return this.http.delete(this.url + `/contacts/${value}`)
  }

  editOrganisation(value: Organisation): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.put(this.url + '/organisations/' + value.id, value, { headers: headers })
  }

  editContact(value: Contact): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.put(this.url + '/contacts/' + value.id, value, { headers: headers })
  }





  addQuoteJSON(newQuoteJSON): Observable<any> {
    console.log(newQuoteJSON);
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.url + "/quotes", newQuoteJSON, { headers: headers });
  }



  deleteQuote(value) {
    return this.http.delete(this.url + `/quotes/${value}`)
  }



  editQuote(value: Quote): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.put(this.url + '/quotes/' + value.id, value, { headers: headers })
  }




  addProductJSON(newProductJSON): Observable<any> {
    console.log(newProductJSON);
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.url + "/products", newProductJSON, { headers: headers });
  }



  deleteProduct(value) {
    return this.http.delete(this.url + `/products/${value}`)
  }



  editProduct(value: Product): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.put(this.url + '/products/' + value.id, value, { headers: headers })
  }



}