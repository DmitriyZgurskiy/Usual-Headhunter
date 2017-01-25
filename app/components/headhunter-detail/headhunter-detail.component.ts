import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Headhunter } from '../../models/headhunter';
import { HeadhunterService } from '../../services/headhunter.service';

@Component({
  moduleId: module.id,
  selector: 'headhunter-detail',
  templateUrl: 'headhunter-detail.component.html',
  styleUrls: ['headhunter-detail.component.css']
})

export class HeadhunterDetailComponent implements OnInit {
  headhunter: Headhunter;

  constructor(
    private headhunterService: HeadhunterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.headhunterService.getHeadhunter(+params['id']))
      .subscribe(headhunter => this.headhunter = headhunter);
  }

  goBack(): void {
    this.location.back();
  }
}
