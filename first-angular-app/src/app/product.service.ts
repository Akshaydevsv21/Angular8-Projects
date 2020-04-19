import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(){
    return [
      {
        "id":200,
        "name":"Television",
        "brand":"Toshiba",
         "price":25000 
      },{
        "id":201,
        "name":"Laptop",
         "brand":"hp",
         "price":30000 
      },{
        "id":202,
        "name":"AC",
         "brand":"Godrej",
         "price":25000 
      },{
        "id":203,
        "name":"Washing Machine",
         "brand":"Whirlpool",
         "price":20000
      }

    ];
  }
  constructor() { 

  }
}
