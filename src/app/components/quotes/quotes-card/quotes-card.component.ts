import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-card',
  templateUrl: './quotes-card.component.html'
})
export class QuotesCardComponent implements OnInit {

  constructor() { }

  @Input() public quote;
  
  ngOnInit() {
  }

}
