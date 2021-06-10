import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-demo',
  templateUrl: './style-demo.component.html',
  styleUrls: ['./style-demo.component.css']
})
export class StyleDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  players: any = [
    {
      name: "Virat Kohli",
      country: "India"
    },
    {
      name: "Chris gayle",
      country: "West-Indies"
    },
    {
      name: "Steve Smith",
      country: "Australia"
    },
    {
      name: "Babar Azam",
      country: "Pakistan"
    },
    {
      name: "M S Dhoni ",
      country: "India"
    },
    {
      name: "Joe Root",
      country: "England"
    }

  ]

  getColor(country) {
    switch (country) {
      case "India":
        return "blue"
        break;
      case "Australia":
        return "yellow"
        break;
      case "Pakistan":
        return "green"
        break;
      case "England":
        return "purple"
        break;
        case "West-Indies":
          return "brown"
          break;

      default:
        return "gray";
        break;
    }
  }

}
