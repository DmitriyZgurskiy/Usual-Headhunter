import { Injectable } from '@angular/core';
import { Headhunter } from '../models/headhunter';
import { HEADHUNTERS } from '../mocks/headhunter.mock';

@Injectable()
export class HeadhunterService {
  getHeadhunters(): Promise<Headhunter[]> {
    return Promise.resolve(HEADHUNTERS);
  }
}
