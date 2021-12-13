import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-gallary',
  templateUrl: './product-gallary.component.html',
  styleUrls: ['./product-gallary.component.scss'],
})
export class ProductGallaryComponent implements OnInit {
  index = 1;
  preview = 0;

  ngOnInit(): void {}

  carouselSwitch(isNext: boolean) {
    if (this.index > 3 && isNext) {
      this.index = 0;
    } else if (this.index < 2 && !isNext) {
      this.index = 4;
    }

    if (isNext) {
      this.index++;
    } else {
      this.index--;
    }
  }

  setCurrentImage(index: number) {
    this.index = index;
  }
}
