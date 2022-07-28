import { Component, OnInit } from '@angular/core';
import { CurrSrvService } from 'src/app/services/curr-srv.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  convertedResult: any = {}
  _curr: any;
  usdRes: any;
  constructor(private csrv: CurrSrvService) { }

  ngOnInit(): void {
  }

  convertCurrUSD(curr_type: any) {
    let data = {
      amount: this._curr,
      type: curr_type
    }
    this.csrv.convertToUSD(data).subscribe((res: any) => {
      if (res) {
        this.convertedResult = res;
        console.log(' the converted value is', res);
      }
      else {
        console.log('error while converting');
      }
    })

  }

}
