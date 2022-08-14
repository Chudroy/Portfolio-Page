import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
  constructor() {}

  ngOnInit(): void {}

  nameError() {
    if (this.name.hasError('required')) {
      return 'Required';
    }
    return null;
  }
  emailError() {
    if (this.email.hasError('required')) {
      return 'Required';
    }
    return null;
  }
  messageError() {
    if (this.message.hasError('required')) {
      return 'Required';
    }
    return null;
  }
}
