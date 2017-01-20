import { Component } from '@angular/core';

export class Headhunter {
  id: number;
  name: string;
  email: string;
  skype: string;
  linkedin: string;
}

const HEADHUNTERS: Headhunter[] = [
  { id: 0, name: 'Sandra', email: 'sandra@gmail.com', skype: 'sandra', linkedin: 'sandra'},
  { id: 1, name: 'Sveta', email: 'Sveta@gmail.com', skype: 'Sveta', linkedin: 'Sveta'},
  { id: 2, name: 'Ivan', email: 'Ivan@gmail.com', skype: 'Ivan', linkedin: 'Ivan'},
  { id: 3, name: 'Olya', email: 'Olya@gmail.com', skype: 'Olya', linkedin: 'Olya'},
  { id: 4, name: 'Masha', email: 'Masha@gmail.com', skype: 'Masha', linkedin: 'Masha'}
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Headhunters</h2>
    
    <ul class="heroes">
      <li *ngFor="let headhunter of headhunters"
          [class.selected]="headhunter === selectedHeadhunter"
          (click)="onSelect(headhunter)">
          <span class="badge">
            {{headhunter.id}}
          </span>
          {{headhunter.name}}
      </li>   
    </ul>
    
    <div *ngIf="selectedHeadhunter">
      <h2>{{selectedHeadhunter.name}}</h2>
      <div>
        <label>id: </label>
        {{selectedHeadhunter.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHeadhunter.name" placeholder="name">
      </div>
      <div>
        <label>email: </label>
        <input [(ngModel)]="selectedHeadhunter.email" placeholder="email">
      </div>
      <div>
        <label>skype: </label>
        <input [(ngModel)]="selectedHeadhunter.skype" placeholder="skype">
      </div>
      <div>
        <label>linkedin: </label>
        <input [(ngModel)]="selectedHeadhunter.linkedin" placeholder="linkedin">
      </div>  
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent  {
  title = 'Usual-Headhunter';
  headhunters = HEADHUNTERS;
  selectedHeadhunter = Headhunter;

  onSelect(headhunter: Headhunter): void {
    this.selectedHeadhunter = headhunter;
  }
}
