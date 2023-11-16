import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterVM } from 'src/ModelVM/RegisterVM';
import { Response } from 'src/ModelVM/Response';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  Responseobj:Response=new Response();
  model:RegisterVM=new RegisterVM();
  myArray: number[] = [];

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  Register(){
    

    this.http.post<any>(`${environment.apiUrl}api/Auth/Register`,this.model).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem("token",res.token);
        this.myArray=[];
        this.saveArrayToLocalStorage();
        this.router.navigate(['']);
      },
      error=>{
        alert(error.message);
      }
    )
  }
  saveArrayToLocalStorage(): void {
    // Convert the array to a JSON string
    const arrayString = JSON.stringify(this.myArray);
  
    // Save the JSON string to localStorage
    localStorage.setItem('myArray', arrayString);
  }

}
