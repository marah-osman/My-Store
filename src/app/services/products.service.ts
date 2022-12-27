import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [];
  products$ = new BehaviorSubject<Product[]>(this.products);

  constructor(private http: HttpClient) { }

  GetProducts() {
      this.http.get<Product[]>('/assets/data.json').subscribe(products=> {
      this.products = products;
      this.products$.next(this.products);

      // s.unsubscribe();
    });
  }
  GetProductdetails(id: number) {
    return this.products$.asObservable()
    .pipe(map(products => products.find(todo => todo.id === id)));
  }
  
}

