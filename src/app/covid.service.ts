import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { State } from './state.interface';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  returnCovidObservable()
  {
    return this.http.get('https://api.covid19india.org/state_district_wise.json');
  }
  returnObject(data)
  {
    let districtData=[];
    //console.log(data);
    //console.log(data);
    let obj=data['districtData'];
    let totalActive=0;
    let totalConfirmed=0;
    let totalDeceased=0;
    //console.log(Object.entries(obj));
    //console.log(obj);
    for(let [key, value] of Object.entries(obj))
    {
      //  console.log(value['active']);
      totalActive+=value['active'];
      totalConfirmed+=value['confirmed'];
      totalDeceased+=value['deceased'];
      let abhi: State={name:key, active:value['active'],confirmed:value['confirmed'],deceased:value['deceased'] };
      districtData.push(abhi);
      
    }
    //console.log(districtData);
    districtData.push({name:'Total', active:totalActive,confirmed:totalConfirmed,deceased:totalDeceased })
    return districtData;

  }

    compare(name, ascending) {
      //console.log(name);
      let ascendingFunc= function(a, b)
      {
        // console.log(a[name], b[name], (a[name] < b[name]));
      if ( a[name] < b[name] ){
        return 1;
      }
      else if ( a[name] > b[name] ){
        return -1;
      }
      return 0;
      }
      let descendingFunc= function(a, b)
      {
        // console.log(a[name], b[name], (a[name] < b[name]));
      if ( a[name] > b[name] ){
        return 1;
      }
      else if ( a[name] < b[name] ){
        return -1;
      }
      return 0;
      }
      if(ascending===true) return ascendingFunc;
      else return descendingFunc;

    }


  sortData(data: Array<State>, name, ascending)
  {
    return data.sort(this.compare(name, ascending));
  }
}
