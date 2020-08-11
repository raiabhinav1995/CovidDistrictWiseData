import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from '../state.interface';
import { CovidService } from '../covid.service';

@Component({
  selector: 'district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  @Input()districtData: State[];
  a: State[];
  ascending: boolean;
  @Output() sendData=new EventEmitter<State[]>();
    constructor(private covidSer: CovidService) {}

  ngOnInit(): void {
    this.a=this.covidSer.returnObject(this.districtData); 
    // console.log(this.a);
    let totalObj=this.a.splice(this.a.length-1, 1);
    this.sendData.emit(totalObj);
  }
  sortingWithService(name)
  {
    this.ascending=!this.ascending;
    // console.log(this.ascending);
    this.a=this.covidSer.sortData(this.a, name, this.ascending);
  }
}


// this.



