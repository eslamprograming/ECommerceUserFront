import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginVM } from 'src/ModelVM/LoginVM';
import { Response } from 'src/ModelVM/Response';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  LoginFrm:LoginVM=new LoginVM();
  ResponseObj:Response=new Response();

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.http.post<any>(`${environment.apiUrl}api/Auth/Login`,this.LoginFrm).subscribe(res=>{
      this.ResponseObj=res;
      if(res.isAuthenticated===true){
      console.log(res);
      localStorage.setItem("token",res.token);
      this.router.navigate(['']);
      }
      else{
        alert(res.message);
      }
    },
    error=>{alert(error.message);}
    )
  }

}
