import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Quotes } from 'src/app/modalClass/Quotes';
import { timer } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  
  // quotes =  new Array();

  quotes =  [
    {
      id: 1,
      speaker: "Mother Teresa",
      imagePath: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxODAxNTQ0MjA1/mother-teresa-9504160-1-402.jpg",
      quote: "The biggest problem in the world today is not poverty or disease but the lack of love and charity and the feeling of being unwanted."
    },
    {
      id: 2,
      speaker: "Swami Vivekananda",
      imagePath: "https://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/podcast_images/swami-vivekananda-ili-96-img-1.jpg",
      quote: "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far."
    },
    {
      id: 3,
      speaker: "Dr.A.P.J.Abdul Kalam",
      imagePath: "https://d2yhzr6tx8qnba.cloudfront.net/images/db/2/1a/56b349d43f1a2.jpeg",
      quote: "To succeed in your mission, you must have single-minded devotion to your goal."
    },
    {
      id: 4,
      speaker: "Gautam Buddha",
      imagePath: "http://dontgiveupworld.com/wp-content/uploads/2011/04/wallpaper-gautam-buddha.jpg",
      quote: "All that we are is the result of what we have thought. The mind is everything, what we think we become."
    }
  ];

  ngOnInit(){
  }

}
