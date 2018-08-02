// System import
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { FirebaseApp } from 'angularfire2';
import { MenuController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Observable } from 'rxjs';
import { AngularFireDatabase} from 'angularfire2/database'
import _ from 'lodash';
import { TabsPage } from '../pages/tabs/tabs';
// for deployment

//--------------------------------------

export enum Menu {
  BOOKCAR = 'bookcar',
  RESERVATION = 'reservation',
  WALLET = 'wallet',
  PROMOTIONS = 'promotions',
  PROFILE = 'profile',
  REFERRAL = 'referral'
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage
  versionNumber;
  constructor(public menuCtrl: MenuController,
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    public iab: InAppBrowser) {
    // translateService.setDefaultLang('en');
    // this.translateService.use('en');
    this.initializeApp();
    // this.initializeUpdate()
    // used for an example of ngFor and navigation
  
  }

  initializeApp() {
    console.log("initialieApp", navigator.onLine);
    this.platform.ready().then(() => {
      console.log("platform ready");
  
      this.statusBar.backgroundColorByHexString('#37BC9B');
      this.statusBar.overlaysWebView(false)
      this.splashScreen.hide();
      // check internet are availabl
      // this.geoLocation.getCurrentPosition().then(pos => {
      //   this.global.setUserLocation(pos.coords.latitude, pos.coords.longitude)

      //   this.buidingsProvider.getNearestBuilding(pos.coords.latitude, pos.coords.longitude).subscribe((building) => {
      //     this.filtersProvider.setCities([building.data[0].city]);
      //   })

      // })
    });
  }

}
