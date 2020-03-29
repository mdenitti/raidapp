import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Quote } from '../../shared/model/quotes.model';

@Component({
  selector: 'app-quotesedit',
  templateUrl: './quotesedit.component.html',
  styleUrls: ['./quotesedit.component.css']
})
export class QuoteseditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }
  id: number = this.route.snapshot.params.id;
  quote$: Observable<any>

  editInput(idvar, quoteNumber, organisationId, contactId, productId, poNumber, price, discount, transport, invoice, send, serviced, payed) {
    const updateQuote = new Quote(idvar, quoteNumber, organisationId, contactId, productId, poNumber, price, discount, transport, invoice, send, serviced, payed);
    this.api.editQuote(updateQuote).subscribe(
      (result => { this.api.getQuotes() })
    )
    this.router.navigate(['main/quotesadd']);
  }



  ngOnInit() {
    this.quote$ = this.api.findQuote(this.id);

  }

  onCancel() {
    this.router.navigate(['main/quotes']);
  }

}
