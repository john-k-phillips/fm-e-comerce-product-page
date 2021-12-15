import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartChanged = new Subject<number>();

  previewImages = [
    '../../assets/image-product-1.jpg',
    '../../assets/image-product-2.jpg',
    '../../assets/image-product-3.jpg',
    '../../assets/image-product-4.jpg',
  ];
  cartValue = 0;

  constructor() {}

  ngOnInit(): void {}

  getPreviewImages() {
    return this.previewImages.slice();
  }

  changeCartValue(value: number) {
    this.cartValue += value;
    this.cartChanged.next(this.cartValue);
  }
}
