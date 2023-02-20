
import { Product } from 'src/app/Models/Product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:Product[]=[];
  displayedColumns: string[] = ['name', 'price','stock'];
  public constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    const observable = this.http.get<Product[]>(environment.productsUrl);
    observable.subscribe(products=>this.products=products);  
  }
}
