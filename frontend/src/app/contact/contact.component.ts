import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendMessageService } from '../shared/services/send-message.service';
import { Message } from '../shared/interfaces/message';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  currentMessage!: Message;

  sendMessageForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.sendMessageForm.get('name');
  }
  get email() {
    return this.sendMessageForm.get('email');
  }
  get message() {
    return this.sendMessageForm.get('message');
  }

  constructor(
    private sendMessageService: SendMessageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCurrentMessage();
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'Close', { duration: 4000 });
  }

  getCurrentMessage() {
    this.sendMessageService.getCurrentMessage().subscribe();
  }

  onSubmit() {
    this.sendMessageService.sendMessage(this.sendMessageForm.value).subscribe({
      next: (res) => {
        this.openSnackBar("Message sent! I'll get back to you soon!");
      },
      error: (err) => {
        this.openSnackBar(err);
      },
    });

    this.currentMessage = this.sendMessageForm.value as Message;
    this.getCurrentMessage();
  }
}
