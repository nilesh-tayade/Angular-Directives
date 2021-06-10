import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-demo',
  templateUrl: './class-demo.component.html',
  styleUrls: ['./class-demo.component.css']
})
export class ClassDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

getClass()
{

return "one two";
}

getCssClass(mode)
{
  let cssClass ;

if(mode=="mode")
{
  cssClass={
    'one':true,
    'two':true
  }
}
else{

  cssClass={
    'three':true,
    'four':true
  }

}
return cssClass;
}

}
