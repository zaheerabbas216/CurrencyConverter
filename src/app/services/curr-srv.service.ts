import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrSrvService {
  _baseURL = "http://localhost:4000/";
  // _baseURL = "https://nodeauthbackend.herokuapp.com/";

  constructor(private http: HttpClient) { }

  convertToUSD(payload: any) {
    return this.http.post(this._baseURL + "currency/convert", payload)
  }

}
