import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExchangeRatesService{

    private apiUrl = 'https://v6.exchangerate-api.com/v6/edeeb721a089223ae891740a/latest/USD'; 
    private apiKey = 'edeeb721a089223ae891740a'; 

    constructor(private _http:HttpClient){

    }
    getExchangeRates(): Observable<any> {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        });
    
        return this._http.get<any>(this.apiUrl, { headers });
      }
}