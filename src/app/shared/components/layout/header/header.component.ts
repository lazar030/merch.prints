import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigate(path: string, prepath?: string) {
    if (prepath) {
      this.router.navigate([`/${prepath}/${path}`]);
    } else {
      this.router.navigate([`/${path}`]);
    }
  }
}
