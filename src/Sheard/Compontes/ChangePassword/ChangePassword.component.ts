import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordVM } from 'src/ModelVM/ChangePasswordVM';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-ChangePassword',
  templateUrl: './ChangePassword.component.html',
  styleUrls: ['./ChangePassword.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
  
  model:ChangePasswordVM=new ChangePasswordVM();

  ngOnInit() {
  }
  changePassword(){
    
    alert(this.model.oldPassword);
    alert(this.model.newPassword);
    this.http.put<any>(`${environment.apiUrl}api/Auth/UpdatePassword`,this.model).subscribe(
      res=>{
        console.log(res);
        if(res.succeeded===true){
        this.router.navigate(['/Login']);

        }
        else{
          for(let item of res.errors){
           alert(item.description);
          }
        }
      },
      error=>{
        alert(error.message);
      }
    )
  }

}
