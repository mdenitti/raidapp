import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Organisation } from '../../shared/model/organisations.model';

@Component({
  selector: 'app-organisationdelete',
  templateUrl: './organisationdelete.component.html',
  styleUrls: ['./organisationdelete.component.css']
})
export class OrganisationdeleteComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private ApiService: ApiService) { }
  id: number = this.route.snapshot.params.id;
  organisation$: Observable<any>

  ngOnInit(): void {
    this.organisation$ = this.ApiService.findOrganisation(this.id);
  }

  onCancel() {
    this.router.navigate(['main/organisations']);
  }

  onDelete(organisationId) {
    console.log(organisationId);
    this.ApiService.deleteOrganisation(organisationId).subscribe(
      (data) => {
        this.router.navigate(['/organisation']);
      }
    );
    this.router.navigate(['main/organisations']);
  }

}

