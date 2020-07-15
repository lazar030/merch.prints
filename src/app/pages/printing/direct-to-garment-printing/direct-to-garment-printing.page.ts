import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'my-direct-to-garment-printing',
  templateUrl: './direct-to-garment-printing.page.html',
  styleUrls: ['./direct-to-garment-printing.page.scss']
})
export class DirectToGarmentPrintingPage implements OnInit {

  constructor() {}

  title =
    'CUSTOM T-SHIRTS MADE EASY WITH OUR DIGITAL DIRECT TO GARMENT PRINTING';

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = true;

  slides = [
    { image: 'assets/images/b1.jpg' },
    { image: 'assets/images/b2.jpg' },
    { image: 'assets/images/b3.jpg' },
    { image: 'assets/images/b4.jpg' },
    { image: 'assets/images/b5.jpg' },
    { image: 'assets/images/b6.jpg' }
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
