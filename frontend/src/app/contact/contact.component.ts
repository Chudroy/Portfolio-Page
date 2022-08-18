import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendMessageService } from '../shared/services/send-message.service';
import { Message } from '../shared/interfaces/message';
import { tap } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  currentMessage: Message = {
    id: 0,
    name: 'n/a',
    email: 'n/a',
    message: 'n/a',
  };

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

  constructor(private sendMessageService: SendMessageService) {}

  ngOnInit(): void {
    this.getCurrentMessage();
  }

  getCurrentMessage() {
    this.sendMessageService.getCurrentMessage().subscribe();
  }

  onSubmit() {
    this.sendMessageService.sendMessage(this.sendMessageForm.value).subscribe();

    this.currentMessage = this.sendMessageForm.value as Message;
    this.getCurrentMessage();
  }
}
