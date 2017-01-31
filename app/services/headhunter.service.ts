import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

import { Headhunter } from '../models/headhunter';
import { HEADHUNTERS } from '../mocks/headhunter.mock';

@Injectable()

export class HeadhunterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';

  constructor(private http: Http) {}

  getHeadhunters(): Promise<Headhunter[]> {
    return this.http.get('http://localhost:3000/headhunters')
      .toPromise()
      .then(response =>
        response.json().data as Headhunter[])
      .catch(this.handleError);
  }

  getHeadhuntersSlowly(): Promise<Headhunter[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeadhunters()), 2000);
    })
  }

  getHeadhunter(id: number): Promise<Headhunter> {
    return this.getHeadhunters()
      .then(headhunter => headhunter.find(headhunter => headhunter.id === id))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
