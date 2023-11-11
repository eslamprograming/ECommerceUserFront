import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/ModelVM/Response';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-CartDetails',
  templateUrl: './CartDetails.component.html',
  styleUrls: ['./CartDetails.component.css']
})
export class CartDetailsComponent implements OnInit {

  myArray:number[] = new Array();
  products:any[]=new Array();
  Responseobj:Response=new Response();
  quntity:any;

  constructor(private http:HttpClient,private router:Router) { }

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
          console.log(this.Responseobj);
        },
        error=>{
          alert("error");
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

}
