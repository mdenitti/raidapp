import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/firebaseauth.service';
import { Contact } from '../../shared/model/contacts.model';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Organisation } from '../../shared/model/organisations.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  filter: FormControl;
  filter$: Observable<string>;

  contacts$: Observable<Contact[]>;
  filteredContacts$: Observable<Contact[]>
  organisations$: Observable<Organisation[]>;
  addContacts$: Observable<Contact[]>;

  showNew: Boolean = false;
  name: string;
  telephone: string;
  mail: string;
  organisation_id: number;
  last_contacted: Date;
  showEdit: boolean;
  curDate: Date = new Date();
  closeResult: string;
  contactId: number;

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
    const newContactJSON = new Contact(
      null,
      this.name,
      this.telephone,
      this.mail,
      Number(this.organisation_id),
      this.last_contacted
    );
    console.log(newContactJSON);
    this.ApiService.addContactJSON(newContactJSON).subscribe();
    this.router.navigate(['main/contactadd']);
  }

  onDelete(contactId) {
    console.log(contactId);
    this.ApiService.deleteContact(contactId).subscribe(
      (data) => {
        this.router.navigate(['/contact']);
      }
    );
    this.router.navigate(['main/contacts']);
  }

  constructor(private ApiService: ApiService, public authService: AuthService, private router: Router) {

    this.contacts$ = this.ApiService.getContactsOrg();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredContacts$ = combineLatest(this.contacts$, this.filter$)
      .pipe(map(([contacts, filterString]) => contacts.filter(contact =>
        contact.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)));

  }




  ngOnInit() {
    this.contacts$ = this.ApiService.getContactsOrg();
    console.log(this.contacts$);
    this.organisations$ = this.ApiService.getOrganisations();
    /* this.addContacts$ = this.ApiService.AddContacts(); */
  }

  onNew() {
    // display registration entry section.
    this.showNew = true;
  }

  onCancel() {
    this.showNew = false;
  }

  onEdit(id) {
    this.ApiService.findContact(id).subscribe();
    /* this.router.navigate(['main/edit']); */
  }

  editInput(id) {
    console.log(id);
    this.router.navigate(['/contactedit/' + id]);
  }

  deleteInput(id) {
    this.router.navigate(['/contactdelete/' + id]);
  }

}

