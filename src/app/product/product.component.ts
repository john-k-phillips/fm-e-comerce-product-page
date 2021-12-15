import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  value = 0;
  constructor(private productService: ProductService) {
    this.value = productService.cartValue;
  }

  changeValue(isIncreasing: boolean) {
    if (!isIncreasing && this.value < 1) {
      return;
    }

    isIncreasing ? this.value++ : this.value--;
  }

  onAdd() {
    this.productService.changeCartValue(this.value);
    this.value = 0;
  }
}
