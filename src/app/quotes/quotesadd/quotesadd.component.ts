import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'Offertebestand met succes aangepast!',
}
];

@Component({
  selector: 'app-quotesadd',
  templateUrl: './quotesadd.component.html',
  styleUrls: ['./quotesadd.component.css']
})
export class QuotesaddComponent implements OnInit {

  alerts: Alert[];

  constructor(private router: Router) {

    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);

  }

  ngOnInit(): void {
  }


  backToOrg() {
    this.router.navigate(['main/quotes']);
  }

}
