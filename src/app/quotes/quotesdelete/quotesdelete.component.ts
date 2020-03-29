import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Quote } from '../../shared/model/quotes.model';

@Component({
  selector: 'app-quotesdelete',
  templateUrl: './quotesdelete.component.html',
  styleUrls: ['./quotesdelete.component.css']
})
export class QuotesdeleteComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private ApiService: ApiService) { }
  id: number = this.route.snapshot.params.id;
  quote$: Observable<any>

  ngOnInit(): void {
    this.quote$ = this.ApiService.findQuote(this.id);
  }

  onCancel() {
    this.router.navigate(['main/quotes']);
  }

  onDelete(quoteId) {
    console.log(quoteId);
    this.ApiService.deleteQuote(quoteId).subscribe(
      (data) => {
        this.router.navigate(['/quote']);
      }
    );
    this.router.navigate(['main/quotes']);
  }

}

