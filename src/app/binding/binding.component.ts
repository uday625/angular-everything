import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  counter: number =0;
  name: string ='';

  constructor() { }

  ngOnInit(): void {
  }

  IncreaseCounter(){
    this.counter +=1
  }

  DecreaseCounter(){
    if (this.counter >0)
      this.counter -=1
    else
      this.counter = 0
  }

  setClasses(){
    let myClasses = {
      active: this.counter > 4,
      notactive: this.counter <= 4
    };
    return myClasses;
  }

}
