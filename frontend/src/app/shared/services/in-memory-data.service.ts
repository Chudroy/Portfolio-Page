import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  constructor() {}
  createDb() {
    let sendMessage = [
      { name: 'Lenny', email: 'len@gmail.com', message: 'hi' },
    ];
    return { sendMessage };
  }
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
