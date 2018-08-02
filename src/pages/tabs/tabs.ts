import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { TestMapPage} from '../test-map/test-map';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 // tab1Root:any = MapPage;
  tab2Root: any = ListPage;
  tab3Root: any = TestMapPage;

  // tab1Root:any = ListPage;
  // tab2Root: any =MapPage ;

}