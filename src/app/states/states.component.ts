import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CovidService} from '../covid.service';
@Component({
  selector: 'states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  covidData$:Observable<any>;
  constructor(private covidSer: CovidService) {
    this.covidData$=this.covidSer.returnCovidObservable();
   }

  ngOnInit(): void {
  }

}
