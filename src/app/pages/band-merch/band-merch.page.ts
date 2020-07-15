import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'my-band-merch',
  templateUrl: './band-merch.page.html',
  styleUrls: ['./band-merch.page.scss']
})
export class BandMerchPage implements OnInit {

  constructor() {}

  title =
    'MAKE MORE MONEY FROM OUR CUSTOM BAND MERCHANDISE & TOUR RESUPPLY';

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = true;

  slides = [
    { image: 'assets/images/d1.jpg' },
    { image: 'assets/images/d2.jpg' },
    { image: 'assets/images/d3.jpg' },
    { image: 'assets/images/d4.jpg' },
    { image: 'assets/images/d5.jpg' },
    { image: 'assets/images/d6.jpg' }
  ];

  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth < 576) {
      this.itemsPerSlide = 1;
    } else {
      this.itemsPerSlide = 3;
    }
  }

  ngOnInit() {
    this.onResize();
  }

  openChat(chat) {
    chat.intercom.show();
  }
}
