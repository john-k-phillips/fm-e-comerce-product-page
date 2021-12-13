import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  index = 1;
  preview = 0;

  constructor() {}

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
