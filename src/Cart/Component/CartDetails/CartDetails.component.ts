import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ModelVM/Response';
import { OrderVM } from 'src/ModelVM/orderVM';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-CartDetails',
  templateUrl: './CartDetails.component.html',
  styleUrls: ['./CartDetails.component.css']
})
export class CartDetailsComponent implements OnInit {
  
currentDateTime: Date;

  myArray:number[] = new Array();
  products:any[]=new Array();
  Responseobj:Response=new Response();
  quntity:any;
  totalPrice:number=0;
  productIdsString?:any[];

  constructor(private http:HttpClient,private router:Router) { 
    this.currentDateTime = new Date();
  }

  ngOnInit() {
    this.productCart();
  }
  productCart(){
    
    this.getArrayFromLocalStorage();
    for (let item of this.myArray) {
      this.http.get<any>(`${environment.apiUrl}api/Product/GetProduct?ProductID=${item}`).subscribe(
        res=>{
          this.Responseobj=res;
          this.products.push(res.value);
          this.totalPrice+=res.value.price;
          console.log(this.Responseobj);
        },
        error=>{
          alert(error.message);
        }
        
      )
  }

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
  removeItemFromMyArray(item: number): void {
    // Find the index of the item in the array
    const index = this.myArray.indexOf(item);
  
    // If the item is found, remove it from the array
    if (index !== -1) {
      this.myArray.splice(index, 1);
  
      // Save the updated array to local storage
      this.saveArrayToLocalStorage();
      location.reload();
    }
  }
  emptyArray(): void {
  // Empty the array
  this.myArray = [];

  // Save the updated (empty) array to localStorage
  this.saveArrayToLocalStorage();
}

  orderVM:OrderVM = {
    orderDate:new Date(),  
    products: this.myArray, // Example product IDs
    apPlicationUserId: ''  // You may set this based on user authentication
  };
  buy() {
    this.getArrayFromLocalStorage(); // Assuming this method populates this.orderVM
  
    const p=localStorage.getItem('myArray');
    this.orderVM.orderDate=this.currentDateTime;
    this.orderVM.products=p ? JSON.parse(p) : [];
    
    this.http.post<any>(`${environment.apiUrl}api/Order/AddOrder`, this.orderVM).subscribe(
      res => {
        console.log('Success:', res);
        alert('Order placed successfully.');
        this.emptyArray();
        location.reload();
      },
      error => {
        console.error('Error:', error);
        alert('Error: ' + error.message);
      }
    );
  }
  
  

  

}
