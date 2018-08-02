import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestMapPage } from './test-map';
import { IonPullupModule } from 'ionic-pullup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    TestMapPage,
  ],
  imports: [
    IonPullupModule,
    BrowserAnimationsModule,
    IonicPageModule.forChild(TestMapPage),
  ],
  entryComponents: [
    TestMapPage
  ]
})
export class TestMapPageModule {}
