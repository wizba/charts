import { People } from './../interfaces/People';
import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
 
  people:People[]=[
    {
      name:'mongo',
      surname:'WABANTU',
      Gender:'male'
    },
    {
      name:'mongo',
      surname:'WADB',
      Gender:'male'
    },
    {
      name:'nyikoThoka',
      surname:'WADB',
      Gender:'female'
    },
    {
      name:'ThokaNyiko',
      surname:'Thor',
      Gender:'male'
    },
    {
      name:'happy',
      surname:'hapiness',
      Gender:'male'
    },
    {
      name:'ha',
      surname:'hiness',
      Gender:'female'
    },
    {
      name:'steve',
      surname:'hiness',
    
    },
    {
      name:'benny',
      surname:'benny',
    
    }
  ];
 males:number=0;
 females:number=0;
 others:number=0;
  constructor() { }

  countGender()
  {
    this.people.forEach((value)=>{
      console.table(value)
      if(value.Gender == 'male' )
      {
        this.males++;
      }

      if(value.Gender == 'female' )
      {
        this.females++;
      }
      if(!value.Gender)
      {
        this.others++;
      }
    });

    console.table({male : this.males,female : this.females, other: this.others});
  
  }

  
}
