import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Headhunter } from '../../models/headhunter';
import { HeadhunterService } from '../../services/headhunter.service';

@Component({
  moduleId: module.id,
  selector: 'headhunters',
  templateUrl: 'headhunters.component.html',
  styleUrls: [ 'headhunters.component.css' ]
})

export class HeadhuntersComponent implements OnInit {
  headhunters: Headhunter[];
  selectedHeadhunter: Headhunter;

  constructor(
    private router: Router,
    private headhunterService: HeadhunterService) { }

  getHeadhunters(): void {
    this.headhunterService.getHeadhunters().then(headhunters => this.headhunters = headhunters);
  }

  ngOnInit(): void {
    this.getHeadhunters();
  }

  onSelect(headhunter: Headhunter): void {
    this.selectedHeadhunter = headhunter;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHeadhunter.id]);
  }
}
