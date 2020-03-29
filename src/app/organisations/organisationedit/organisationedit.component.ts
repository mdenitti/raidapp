import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Organisation } from '../../shared/model/organisations.model';

@Component({
  selector: 'app-organisationedit',
  templateUrl: './organisationedit.component.html',
  styleUrls: ['./organisationedit.component.css']
})
export class OrganisationeditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }
  id: number = this.route.snapshot.params.id;
  organisation$: Observable<any>

  editInput(idvar, organisationvar, street, number, postalcode, city, btwnr, last_assignment) {
    const updateOrg = new Organisation(idvar, organisationvar, street, number, postalcode, city, btwnr, last_assignment);
    this.api.editOrganisation(updateOrg).subscribe(
      (result => { this.api.getOrganisations() })
    )
    this.router.navigate(['main/organisationadd']);
  }



  ngOnInit() {
    this.organisation$ = this.api.findOrganisation(this.id);

  }

  onCancel() {
    this.router.navigate(['main/organisations']);
  }

}
