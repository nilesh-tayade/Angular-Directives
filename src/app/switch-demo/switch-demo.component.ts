import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-demo',
  templateUrl: './switch-demo.component.html',
  styleUrls: ['./switch-demo.component.css']
})
export class SwitchDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  choose:" "
  setValue(data)
  {
    this.choose=data.target.value;
  }
}
