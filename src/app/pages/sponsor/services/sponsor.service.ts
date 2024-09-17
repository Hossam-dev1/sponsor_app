import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsor, SponsorData } from 'src/app/core/interfaces/sponsors/sponsor';
import { env } from 'src/enviroments/env';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  endPonit: string = 'sponsors';
  constructor(private _http: HttpClient) { }


  list(): Observable<Sponsor> {
    return this._http.get<Sponsor>(env.baseUrl + this.endPonit);
  }

  add(sponsor: SponsorData): Observable<Sponsor> {
    return this._http.post<Sponsor>(env.baseUrl + this.endPonit, sponsor);
  }
}
