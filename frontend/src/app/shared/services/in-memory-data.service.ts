import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  constructor() {}
  createDb() {
    //MUST HAVE UNIQUE ID
    let sendMessage = [
      { id: 1, name: 'Lenny', email: 'len@gmail.com', message: 'hi' },
    ];
    return { sendMessage };
  }

  // genId(sendMessage: Message[]): number {
  //   return sendMessage.length > 0
  //     ? Math.max(...sendMessage.map((sendMessage) => sendMessage.id)) + 1
  //     : 1;
  // }

  // createDb() {
  //   let heroes = [
  //     { id: 1, name: 'Windstorm' },
  //     { id: 2, name: 'Bombasto' },
  //     { id: 3, name: 'Magneta' },
  //     { id: 4, name: 'Tornado' },
  //   ];
  //   return { heroes };
  // }
}
