import { Component, OnInit, PipeTransform } from '@angular/core';
import { AuthService } from '../../shared/services/firebaseauth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Organisation } from '../../shared/model/organisations.model';
import { ApiService } from '../../shared/services/api.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { User } from 'src/app/shared/services/user';


@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent implements OnInit {

  user: User;
  itemsArray = [];
  itemsArray2 = [];
  itemsJson;
  closeResult = '';
  /* filter = new FormControl(''); */
  filter: FormControl;
  filter$: Observable<string>;
  OrgArr = [];

  organisations$: Observable<Organisation[]>;
  filteredOrganisations$: Observable<Organisation[]>
  addOrganisation$: Observable<Organisation[]>;
  showNew: Boolean = false;
  organisation: string;
  street: string;
  number: number;
  postalcode: number;
  city: string;
  btwnr: string;
  last_assignment: Date;
  showEdit: boolean;
  curDate: Date = new Date();
  organisationId: number;






  getDate(lastDate) {
    const diffTime = this.curDate.getTime() - Date.parse(lastDate);
    const diffDays = diffTime / (1000 * 3600 * 24);

    if (diffDays <= 180) {
      return "";
    } else if (diffDays > 180 && diffDays < 365) {
      return "orange";
    } else {
      return "red";
    }
  }



  onSave() {
    const newOrganisationJSON = new Organisation(
      null,
      this.organisation,
      this.street,
      this.number,
      this.postalcode,
      this.city,
      this.btwnr,
      this.last_assignment
    );
    this.ApiService.addOrganisationJSON(newOrganisationJSON).subscribe();
    this.router.navigate(['main/organisationadd']);
  }

  logId(orgId) {

    this.organisationId = orgId;
    console.log(this.organisationId);
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

  constructor(private afs: AngularFirestore, private ApiService: ApiService, public authService: AuthService, private router: Router, pipe: DecimalPipe) {

    /* this.organisations$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    ); */
    this.organisations$ = this.ApiService.getOrganisations();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredOrganisations$ = combineLatest(this.organisations$, this.filter$)
      .pipe(map(([organisations, filterString]) => organisations.filter(organisation =>
        organisation.organisation.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)));



  }





  ngOnInit(): void {

    this.organisations$ = this.ApiService.getOrganisations();


    this.ApiService.getOrganisations().subscribe((res: any[]) => {
      this.itemsArray = res;
      for (let i = 0; i < this.itemsArray.length; i++) {
        this.itemsArray2.push(this.itemsArray[i]);
      }
      console.log("the array is: " + this.itemsArray[0].organisation)
      console.log(this.itemsArray2[0]);
      this.itemsJson = JSON.stringify(this.itemsArray.length);
      console.log(this.itemsJson);
    });




    this.ApiService.getOrganisations().subscribe((OrgRes: any[]) => {
      this.OrgArr = OrgRes;
      console.log(this.OrgArr);
    });








  }

  onNew() {
    // display registration entry section.
    this.showNew = true;
  }

  onCancel() {
    this.showNew = false;
  }

  onEdit(id) {
    this.ApiService.findOrganisation(id).subscribe();
    this.organisationId = id;
  }

  editInput(id) {
    this.router.navigate(['/organisationedit/' + id]);
  }

  deleteInput(id) {
    this.router.navigate(['/organisationdelete/' + id]);
  }


}

