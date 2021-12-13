import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  previewImages = [
    '../../assets/image-product-1.jpg',
    '../../assets/image-product-2.jpg',
    '../../assets/image-product-3.jpg',
    '../../assets/image-product-4.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}

  getPreviewImages() {
    return this.previewImages.slice();
  }
}
