import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { Quote } from '../../shared/model/quotes.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  quotes$: Observable<Quote[]>;
  quotesArr = [];

  chart: any = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit() {

    this.quotes$ = this.ApiService.getQuotes();

    this.ApiService.getQuotes().subscribe((QuoteRes: any[]) => {
      this.quotesArr = QuoteRes;
      console.log(this.quotesArr);
      let quoteNumber = QuoteRes.map(QuoteRes => QuoteRes.quote_number);
      let quotePrice = QuoteRes.map(QuoteRes => QuoteRes.price);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: quoteNumber,
          datasets: [
            {
              data: quotePrice,
              borderColor: '#3cba9f',
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      })

    });




  }

}
