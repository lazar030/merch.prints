import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'my-screen-printing',
  templateUrl: './screen-printing.page.html',
  styleUrls: ['./screen-printing.page.scss']
})
export class ScreenPrintingPage implements OnInit {

  constructor() {}

  title =
    'APPAREL SCREEN PRINTING FOR T-SHIRTS, HOODIES, HATS, TANKS, AND MORE';

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = true;

  slides = [
    { image: 'assets/images/a1.jpg' },
    { image: 'assets/images/a2.jpg' },
    { image: 'assets/images/a3.jpg' },
    { image: 'assets/images/a4.jpg' },
    { image: 'assets/images/a5.jpg' },
    { image: 'assets/images/a6.jpg' }
  ];

  @HostListener('window:resize', [])

  onResize() {
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
