import { Component, ViewChild, NgZone, Output, EventEmitter, Renderer, AfterViewInit, trigger, state, OnDestroy } from '@angular/core';
import { NavController, Events, Content, Platform, Slides } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  MyLocation
} from '@ionic-native/google-maps';
import { style, transition, animate } from '@angular/core';


@Component({
  selector: 'page-test-map',
  templateUrl: 'test-map.html',
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(300))
    ])
  ]
})
export class TestMapPage implements AfterViewInit {

  @Output() markerClick: EventEmitter<any> = new EventEmitter()
  @ViewChild(Content) content: Content;
  @ViewChild('map_canvas') map_canvas: any
  @ViewChild('list') list: any
  @ViewChild('carfilter') carfilter: any
  @ViewChild('slides') slides: Slides;

  building;
  open: boolean = false
  map: GoogleMap;
  mapReady: boolean = false;
  listBuilding: any;
  points: any[] = [];
  markersInit: boolean = false
  ZOOM_LEVEL: number = 13
  public cars = [];
  public currentBuildingName: string = ''
  public currentBuildingId: string = ''
  public isOpen: boolean = false
  public isLoadingCars = false
  public pageInfo: any = {
    pagIndex: 0,
    itemsPerPage: 4
  }
  // for hub2hub
  center: ILatLng
  drawerOptions: any
  markers = []
  selectedMarker = ''
  selectedMarkerState = ''
  showCarFilter = false;
  slideOptions: {}
  showBtnPrev = false
  showBtnNext = false
  loadNewCars = false
  isHub2Hub;
  constructor(public events: Events,
    public renderer: Renderer,
    public navCtrl: NavController,

  ) {
    this.drawerOptions = {
      handleHeight: 1,
      thresholdFromBottom: 200,
      thresholdFromTop: 0,
      bounceBack: false
    };

    this.slideOptions = {
      pagination: true,
      loop: true
    }

    this.loadMap()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }
  
  ngAfterViewInit() {
    // this._platform.ready().then((readySource) => {
    //   this.renderer.setElementStyle(this.carfilter.nativeElement, "webkitTransition", "class 500ms");
    //   this.loadMap()  
    // })
  }

  get networkStatus() {
    return navigator.onLine
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    // this.loadBuilding();
  }


  onMarkerClick(building) {
    this.isHub2Hub = building.hub2hub
    let buildingId = building.building_id
    this.building = building
    this.currentBuildingName = building.name
    this.currentBuildingId = buildingId
    if (!this.isOpen) {
      this.isOpen = true
      this.renderer.setElementClass(this.list.nativeElement, 'show', true)
      this.renderer.setElementClass(this.list.nativeElement, 'hide', false)
    }

    this.selectedMarker = building.building_id;
    //this.selectedMarkerState = this.markers[building.building_id];
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      controls: {
        myLocationButton: true,
        myLocation: true
      },
      camera: {
        target: this.center,
        zoom: 13
      }
    });
    this.loadLocationView();
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.mapReady = true;
      this.setMarker()
    });
  }

  loadLocationView() {
    this.map.getMyLocation().then((location: MyLocation) => {
      this.map.animateCamera({ target: location.latLng, duration: 100 })
    }).catch(err => {
    })
  }

  setMarker() {
    let icon = {
      position: {lat: 16.054407, lng: 108.202167},
      icon: {url : './assets/imgs/G-icon-selected.png',
      size: { width: 32, height: 39 }}
    }
    this.map.addMarker(icon)
  }

}
