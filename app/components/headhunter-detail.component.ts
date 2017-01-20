import { Component, Input } from '@angular/core';
import { Headhunter } from '../models/headhunter';

@Component({
  selector: 'headhunter-detail',
  template: `
    <div *ngIf="headhunter">
      <h2>{{headhunter.name}}</h2>
      <div>
        <label>id: </label>
        {{headhunter.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="headhunter.name" placeholder="name">
      </div>
      <div>
        <label>email: </label>
        <input [(ngModel)]="headhunter.email" placeholder="email">
      </div>
      <div>
        <label>skype: </label>
        <input [(ngModel)]="headhunter.skype" placeholder="skype">
      </div>
      <div>
        <label>linkedin: </label>
        <input [(ngModel)]="headhunter.linkedin" placeholder="linkedin">
      </div>
    </div>
  `
})

export class HeadhunterComponent {
  @Input()
  headhunter: Headhunter
}
