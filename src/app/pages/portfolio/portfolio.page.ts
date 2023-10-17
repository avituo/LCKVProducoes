import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
    
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
