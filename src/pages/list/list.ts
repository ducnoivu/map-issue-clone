
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, Events, App } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  constructor(private navCtrl: NavController,
    private app: App) {
      // using for load more
    
  }
 

}
