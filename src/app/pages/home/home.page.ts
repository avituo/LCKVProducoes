import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'assets/images/lucas.png',
    'assets/images/KLJAY.png',
    'assets/images/GREGO.png',
    'assets/images/TETO.png',
    'assets/images/MAJOR.png',
    'assets/images/CINTHIA.png',
    'assets/images/YUNKVINO.png',
  ];

  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.routerOutlet.swipeGesture = false;
  }

}
