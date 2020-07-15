import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'my-dye-sublimation',
  templateUrl: './dye-sublimation.page.html',
  styleUrls: ['./dye-sublimation.page.scss']
})
export class DyeSublimationPage implements OnInit {

  constructor() {}

  title =
    'ALL OVER T-SHIRT & FULL COVERAGE PRINTING PERFECT FOR TEAM JERSEYS & YOGA PANTS';

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = true;

  slides = [
    { image: 'assets/images/s1.jpg' },
    { image: 'assets/images/s2.jpg' },
    { image: 'assets/images/s3.jpg' },
    { image: 'assets/images/s4.jpg' },
    { image: 'assets/images/s5.jpg' },
    { image: 'assets/images/s6.jpg' }
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
