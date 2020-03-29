import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../shared/model/products.model';

@Component({
  selector: 'app-productdelete',
  templateUrl: './productdelete.component.html',
  styleUrls: ['./productdelete.component.css']
})
export class ProductdeleteComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private ApiService: ApiService) { }
  id: number = this.route.snapshot.params.id;
  product$: Observable<any>

  ngOnInit(): void {
    this.product$ = this.ApiService.findProduct(this.id);
  }

  onCancel() {
    this.router.navigate(['main/products']);
  }

  onDelete(productId) {
    console.log(productId);
    this.ApiService.deleteProduct(productId).subscribe(
      (data) => {
        this.router.navigate(['/product']);
      }
    );
    this.router.navigate(['main/products']);
  }

}
