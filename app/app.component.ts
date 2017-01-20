import { Component } from '@angular/core';

export class Headhunter {
  id: number;
  name: string;
  email: string;
  skype: string;
  linkedin: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hr.name}}</h2>
    <div>
      <label>id: </label>
      {{hr.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hr.name" placeholder="name">
    </div>
    <div>
      <label>email: </label>
      <input [(ngModel)]="hr.email" placeholder="email">
    </div>
    <div>
      <label>skype: </label>
      <input [(ngModel)]="hr.skype" placeholder="skype">
    </div>
    <div>
      <label>linkedin: </label>
      <input [(ngModel)]="hr.linkedin" placeholder="linkedin">
    </div>
  `
})
export class AppComponent  {
  title = 'Usual-Headhunter';
  hr: Headhunter = {
    id: 1,
    name: 'Sandra',
    email: 'sandra@gmail.com',
    skype: 'sandra',
    linkedin: 'https://www.linkedin.com/sandra'
  }
}
