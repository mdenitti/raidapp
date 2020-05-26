import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../../shared/model/contacts.model';
import { Organisation } from '../../shared/model/organisations.model';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css']
})
export class ContacteditComponent implements OnInit {

  organisations$: Observable<Organisation[]>;

  constructor(private router: Router, private route: ActivatedRoute, private ApiService: ApiService) { }
  id: number = this.route.snapshot.params.id;
  contact$: Observable<any>

  editInput(idvar, namevar, telephone, mail, organisationid, last_contacted) {
    console.log(idvar, namevar, telephone, mail, organisationid);
    const updateContact = new Contact(idvar, namevar, telephone, mail, organisationid, last_contacted);
    //Massimo -> organisationid meenemen vanuit het edit form via lokale sjabloon var
    console.log('object naar api details: '+updateContact.organisation_id);
    this.ApiService.editContact(updateContact).subscribe(
      (result => { this.ApiService.getContacts() })
    )
    this.router.navigate(['home']);
  }



  ngOnInit() {
    this.contact$ = this.ApiService.findContact(this.id);
    this.organisations$ = this.ApiService.getOrganisations();
    console.log(this.organisations$);

  }

  onCancel() {
    this.router.navigate(['main/contacts']);
  }

}
