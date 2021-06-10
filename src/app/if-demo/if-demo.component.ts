import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-demo',
  templateUrl: './if-demo.component.html',
  styleUrls: ['./if-demo.component.css']
})
export class IfDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isvalid:boolean=true;

  changeValue(valid)
  {
this.isvalid=valid;
  }

  isvalidElse:boolean=true;

  changeValueElse(validElse)
  {
this.isvalidElse=validElse;
  }

  isvalidThen:boolean=true;

  changeValueThen(validThen)
  {
this.isvalidThen=validThen;
  }


}
