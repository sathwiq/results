import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultboard',
  templateUrl: './resultboard.component.html',
  styleUrls: ['./resultboard.component.css']
})

export class ResultboardComponent implements OnInit {
  data :any =  [
    { name:​ 'sathwiq',
      marks:​ ​{ Maths:​ ​18, English:​ ​21, Science:​ ​45 }, 
      rollNumber:​ ​'KV2017-5A2' }, 

      { name:​ 'Rajiv ', 
      marks:​ ​{ Maths:​ ​43, English:​ ​30, Science:​ ​37 }, 
      rollNumber:​ '​KV2017-5A1' },

      { name:​ 'zoya ', marks:​ ​{ Maths:​ ​42, English:​ ​31, Science:​ ​50 }, rollNumber:​ ​'KV2017-5A3' }
  ] ; 
  highest = 0
  constructor() {   
  } 
  dynamicSort(property) {
    return function (a,b) { 
      return a[property].localeCompare(b[property]);      
    }
  }

  ngOnInit() {
    // Sorting
    this.data.sort(this.dynamicSort("name"))

    //  Finding topper and failed students 
    for(let i = 0;i<this.data.length;i++){
      let  obj = this.data[i]
      obj.total = this.data.marks ;

      this.data[i].total = this.data[i].marks.Maths + this.data[i].marks.Science + this.data[i].marks.English
      if(this.data[i].marks.Maths < 20 ||  this.data[i].marks.Science < 20 ||  this.data[i].marks.English < 20){
        this.data[i].fail = true
      }else{
        this.data[i].fail = false
      }  
      if(this.highest < this.data[i].total ){
        this.highest= this.data[i].total
      }
    }
    
  }

}
