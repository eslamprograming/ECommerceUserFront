import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ModelVM/Response';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-ProductDetials',
  templateUrl: './ProductDetials.component.html',
  styleUrls: ['./ProductDetials.component.css']
})
export class ProductDetialsComponent implements OnInit {
  myArray:number[] = new Array();

AddToCart(productID:any) {
  this.getArrayFromLocalStorage();
  this.addItemToMyArray(productID);
  this.saveArrayToLocalStorage();
  alert("Added item");
}
getArrayFromLocalStorage(): void {
  // Retrieve the JSON string from localStorage
  const arrayString = localStorage.getItem('myArray');

  // Parse the JSON string back to a JavaScript array
  this.myArray = arrayString ? JSON.parse(arrayString) : [];
}
saveArrayToLocalStorage(): void {
  // Convert the array to a JSON string
  const arrayString = JSON.stringify(this.myArray);

  // Save the JSON string to localStorage
  localStorage.setItem('myArray', arrayString);
}

addItemToMyArray(item: number): void {
  // Add item to the array
  this.myArray.push(item);

  // Save the updated array to localStorage
  this.saveArrayToLocalStorage();
}

model:Response=new Response();
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.http.get<any>(`${environment.apiUrl}api/Product/GetProduct?ProductID=${localStorage.getItem('productDetails')}`).subscribe(
      res=>{
        this.model.Value=res.value;
        console.log(res);
      },error=>{
        alert("error");
        console.log("error");
      }
    )
  }
}
