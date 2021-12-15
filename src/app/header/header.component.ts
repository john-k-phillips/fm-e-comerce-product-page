import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isNavOpen = false;
  isCartOpen = false;
  cartValue = 0;
  total = 125;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.cartChanged.subscribe((value: number) => {
      this.cartValue = value;
      this.total = 125 * this.cartValue;
    });
  }

  toggleMenus(isCart: boolean) {
    if (isCart) {
      this.isCartOpen = !this.isCartOpen;
    } else {
      this.isNavOpen = !this.isNavOpen;
    }
  }

  deleteItems() {
    this.productService.cartChanged.next(0);
  }
}
