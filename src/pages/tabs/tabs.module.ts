import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ListPage } from '../list/list';

@NgModule({
  declarations: [
    TabsPage,
    ListPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  entryComponents: [
    TabsPage,
    ListPage
  ]
})
export class TabsPageModule {}
