import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  // events =  new Array();

  events =  [
    {
      id: 1,
      title: "Mother's Day",
      imagePath: "../.././../assets/images/mother.jpg",
      date: "12th May'019"
    },
    {
      id: 2,
      title: "Republic Day",
      imagePath: "../.././../assets/images/republic.jpg",
      date: "26th January'019"
    },
    {
      id: 3,
      title: "School Picnic",
      imagePath: "../.././../assets/images/picnic.jpg",
      date: "12th January'019"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
