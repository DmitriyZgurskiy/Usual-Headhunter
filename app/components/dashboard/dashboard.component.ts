import { Component, OnInit } from '@angular/core';
import { Headhunter } from '../../models/headhunter';
import { HeadhunterService } from '../../services/headhunter.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  headhunters: Headhunter[] = [];

  constructor(private headhunterService: HeadhunterService) {}

  ngOnInit(): void {
    this.headhunterService.getHeadhunters()
      .then(headhunters => this.headhunters = headhunters.slice(1, 5));
  }
}
