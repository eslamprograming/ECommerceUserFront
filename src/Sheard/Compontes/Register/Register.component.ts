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
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  Register(){
    alert(this.model.FirstName);
    alert(this.model.LastName);
    alert(this.model.Username);
    alert(this.model.Email);
    alert(this.model.Password);

    this.http.post<any>(`${environment.apiUrl}api/Auth/Register`,this.model).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem("token",res.token);
        this.router.navigate(['']);
      },
      error=>{
        alert("error");
      }
    )
  }

}
