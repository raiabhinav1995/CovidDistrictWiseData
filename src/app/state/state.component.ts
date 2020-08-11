import { Component, OnInit, Input } from '@angular/core';
import {State} from '../state.interface';
@Component({
  selector: 'state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent{
  @Input()stateName: string;
  total:State={name:'',active:0,confirmed:10,deceased:12};
  @Input()covidData: State;
  constructor() {}
  ngOnInit()
  {
    // console.log(this.covidData);
  }
  ngAfterViewInit()
  {
    //  this.getData();
  }
  getData(totalObject)
  {
    //console.log(totalObject);
    this.total['name']=totalObject[0].name;
    this.total['active']=totalObject[0].active;
    this.total['confirmed']=totalObject[0].confirmed;
    this.total['deceased']=totalObject[0].deceased;
  }
}
  
