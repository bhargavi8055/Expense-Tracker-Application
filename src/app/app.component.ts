import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'expense-tracker';
  

  constructor(private _router:Router){}

  ngOnInit(): void {
    
  }
  onTabChange(event:any){
    const tabIndex = event.index;
    if (tabIndex === 0) {
      this._router.navigate(['/expenses']);
    } else if (tabIndex === 1) {
      this._router.navigate(['/users']);
    }
    else if(tabIndex===2){
      this._router.navigate(['/exchange-rates'])
    }
  }
  
 

}
