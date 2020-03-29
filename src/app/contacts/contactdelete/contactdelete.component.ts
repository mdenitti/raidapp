import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../../shared/model/contacts.model';

@Component({
  selector: 'app-contactdelete',
  templateUrl: './contactdelete.component.html',
  styleUrls: ['./contactdelete.component.css']
})
export class ContactdeleteComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private ApiService: ApiService) { }
  id: number = this.route.snapshot.params.id;
  contact$: Observable<any>

  ngOnInit(): void {
    this.contact$ = this.ApiService.findContact(this.id);
  }

  onCancel() {
    this.router.navigate(['main/contacts']);
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

}


