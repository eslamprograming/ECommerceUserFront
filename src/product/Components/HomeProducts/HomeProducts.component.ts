import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ModelVM/Response';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-HomeProducts',
  templateUrl: './HomeProducts.component.html',
  styleUrls: ['./HomeProducts.component.css']
})
export class HomeProductsComponent implements OnInit {
Logout() {
  localStorage.removeItem('token');
  this.myArray=[];
  this.saveArrayToLocalStorage();
}
  myArray: number[] = [];
Details(arg0: any) {
  localStorage.setItem('productDetails',arg0);
this.router.navigate(['/ProductDetails']);
}
AddToCart(_t57: any) {
  if(localStorage.getItem('token')===null){
    this.router.navigate(['/Login']);
  }
  else{
  this.getArrayFromLocalStorage();
  this.addItemToMyArray(_t57);
  this.saveArrayToLocalStorage();
  alert("Added item");
  }
}

  ResponseCategory:Response=new Response;
  ResponseProduct:Response=new Response;
  CategoryID:number=0;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('myArray')===null){
    this.saveArrayToLocalStorage();
    }
    this.Category();
    this.productCategoryAll();
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


  productCategory(){
    if(this.CategoryID==0){
      this.productCategoryAll();
    }else{
      this.http.get<any>(`${environment.apiUrl}api/Product/GetAllProductCategory?CategoryID=${this.CategoryID}`).subscribe(
        res=>{
          this.ResponseProduct=res;
          console.log(res);
  
        },
        error=>{
          alert(error.message);
        }
      )
    }
    
  }
  productCategoryAll(){
    this.http.get<any>(`${environment.apiUrl}api/Product/GetAllProduct`).subscribe(
      res=>{
        this.ResponseProduct=res;
        console.log(res);

      },
      error=>{
        alert(error.message);
      }
    )
  }
  Category(){
    this.http.get<any>(`${environment.apiUrl}api/Category/GetAllCategory`).subscribe(
      res=>{
        this.ResponseCategory=res;
        console.log(res);
      },
      error=>{
        alert(error.message);
      }
    )
  }

}
