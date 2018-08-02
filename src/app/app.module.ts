
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestMapPageModule } from '../pages/test-map/test-map.module';
import { InAppBrowser } from '../../node_modules/@ionic-native/in-app-browser';
import { TabsPageModule } from '../pages/tabs/tabs.module';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    TestMapPageModule,
    TabsPageModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay',
      backButtonText: '',
      mode: 'ios',
      iconMode: 'ios',
      backButtonIcon: 'ios-arrow-back-outline',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      // tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      animate: true,
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // LaunchNavigator,
    InAppBrowser,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
