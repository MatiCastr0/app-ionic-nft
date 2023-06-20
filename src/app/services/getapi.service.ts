import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nft } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(private http: HttpClient) {}

  getdata(): Observable<Nft[]> {
    return this.http.get<Nft[]>('https://api.coingecko.com/api/v3/nfts/list?per_page=15&page=1');
  }
}
