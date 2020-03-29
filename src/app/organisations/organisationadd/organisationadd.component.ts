import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'Klantenbestand met succes aangepast!',
}
];

@Component({
  selector: 'app-organisationadd',
  templateUrl: './organisationadd.component.html',
  styleUrls: ['./organisationadd.component.css']
})
export class OrganisationaddComponent implements OnInit {

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
    this.router.navigate(['main/organisations']);
  }

}
