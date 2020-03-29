import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/firebaseauth.service';
import { Product } from '../../shared/model/products.model';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  showNew: Boolean = false;
  name: string;
  productId: number;

  onSave() {
    const newProductJSON = new Product(
      null,
      this.name
    );
    console.log(newProductJSON);
    this.ApiService.addProductJSON(newProductJSON).subscribe();
    this.router.navigate(['main/productadd']);
  }

  onDelete(productId) {
    console.log(productId);
    this.ApiService.deleteContact(productId).subscribe(
      (data) => {
        this.router.navigate(['/product']);
      }
    );
    this.router.navigate(['main/products']);
  }

  constructor(private ApiService: ApiService, public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.products$ = this.ApiService.getProducts();
  }

  onNew() {
    // display registration entry section.
    this.showNew = true;
  }

  onCancel() {
    this.showNew = false;
  }

  onEdit(id) {
    this.ApiService.findProduct(id).subscribe();
    /* this.router.navigate(['main/edit']); */
  }

  editInput(id) {
    console.log(id);
    this.router.navigate(['/productedit/' + id]);
  }

  deleteInput(id) {
    this.router.navigate(['/productdelete/' + id]);
  }

}
