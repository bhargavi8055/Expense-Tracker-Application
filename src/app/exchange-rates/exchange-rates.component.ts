import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit{

  constructor(private _exchangeRatesService:ExchangeRatesService){}
  exchangeRates:any;
  ngOnInit(): void {
    this.getExchangeRates();
  }
  getExchangeRates(){
    this._exchangeRatesService.getExchangeRates().subscribe({
      next:(res)=>{
        this.exchangeRates=res;
        console.log("exchangerates::",this.exchangeRates)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  
}
