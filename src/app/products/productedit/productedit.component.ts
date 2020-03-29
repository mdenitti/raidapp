import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../shared/model/products.model';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private router: Router, private route: ActivatedRoute, private ApiService: ApiService) { }

  id: number = this.route.snapshot.params.id;
  product$: Observable<any>

  editInput(idvar, namevar) {
    const updateProduct = new Product(idvar, namevar);
    this.ApiService.editProduct(updateProduct).subscribe(
      (result => { this.ApiService.getProducts() })
    )
    this.router.navigate(['main/productadd']);
  }

  ngOnInit() {
    this.product$ = this.ApiService.findProduct(this.id);
  }

  onCancel() {
    this.router.navigate(['main/products']);
  }

}
