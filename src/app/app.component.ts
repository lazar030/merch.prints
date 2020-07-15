import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'arena',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages = [
    {
      title: 'Arena Embroidery',
      icon: 'Embroidery',
      url: 'https://arenaembroidery.com/'
    },
    {
      title: 'Arena Prints',
      icon: 'PrintingOrder',
      url: 'https://arenaprints.com/'
    },
    {
      title: 'Screen Burning ',
      icon: 'SB',
      url: 'https://shop.arenaprints.com/'
    },
    {
      title: 'Arena Sewing',
      icon: 'Sewing',
      url: 'https://arenasewing.com/'
    }
  ];

  constructor(
    private platform: Platform,
    private router: Router,
    private menu: MenuController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  open(url: string) {
    window.open(`${url}`, '_blank');
  }

  navigate(path: string, menuId?) {
    this.menu.close();
    this.router.navigate([`/${path}`]);
  }

  toggle() {
    console.log((document.getElementById('options').style.height));
    if (document.getElementById('options').style.height === 'auto') {
      document.getElementById('options').style.height = '0';
    } else {
      document.getElementById('options').style.height = 'auto';
    }
  }
}
