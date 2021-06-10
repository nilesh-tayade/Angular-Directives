import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.css']
})
export class ForDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

animals:string[]=[
"dog","cat","sheep","goat","camel"
]

}
