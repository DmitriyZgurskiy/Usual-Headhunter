import { Component, OnInit } from '@angular/core';
import { Headhunter } from './models/headhunter';
import { HeadhunterService } from './services/headhunter.service';

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
    
    <headhunter-detail [headhunter]="selectedHeadhunter"></headhunter-detail>
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
  `],
  providers: [HeadhunterService]
})
export class AppComponent implements OnInit{
  title = 'Usual-Headhunter';
  headhunters: Headhunter[];
  selectedHeadhunter: Headhunter;

  constructor(private headhunterService: HeadhunterService) {}

  ngOnInit(): void {
    this.getHeadhunters();
  }

  getHeadhunters(): void {
    this.headhunterService.getHeadhunters()
      .then(headhunters => this.headhunters = headhunters);
  }

  onSelect(headhunter: Headhunter): void {
    this.selectedHeadhunter = headhunter;
  }
}
