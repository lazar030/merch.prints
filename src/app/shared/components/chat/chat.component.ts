import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/local';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'my-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(public intercom: Intercom) {}

  ngOnInit() {
    this.intercom.boot({
      app_id: environment.appId,
      // Supports all optional configuration.
      widget: {
        activator: '#intercom'
      }
    });
  }
}
