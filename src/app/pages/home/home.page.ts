import { Component } from '@angular/core';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'my-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  title: string =
    'ARIZONA’S EXPERTS IN CUSTOM EMBROIDERY FOR SHIRTS, PATCHES, HATS, & MORE';

  openChat(chat) {
    chat.intercom.show();
  }
}
