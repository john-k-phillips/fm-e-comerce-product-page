import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isNavOpen = false;
  cartValue = 0;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.cartChanged.subscribe((value: number) => {
      this.cartValue = value;
    });
  }

  toggleNavigation() {
    this.isNavOpen = !this.isNavOpen;
  }
}
