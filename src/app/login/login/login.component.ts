import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from '../../shared/services/firebaseauth.service';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  closeResult = '';
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  modalService: any;
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(
    private router: Router, public authService: AuthService) { }






  ngOnInit() {
    if (!this.authService.isLoggedIn) { this.router.navigate(['/login']) };
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason: any) {
    throw new Error("Method not implemented.");
  }





}