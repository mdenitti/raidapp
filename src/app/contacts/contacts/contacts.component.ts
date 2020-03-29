import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/firebaseauth.service';
import { Contact } from '../../shared/model/contacts.model';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Organisation } from '../../shared/model/organisations.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  organisations$: Observable<Organisation[]>;
  addContacts$: Observable<Contact[]>;

  showNew: Boolean = false;
  name: string;
  telephone: string;
  mail: string;
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

  }




  ngOnInit() {
    this.contacts$ = this.ApiService.getContacts();
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

