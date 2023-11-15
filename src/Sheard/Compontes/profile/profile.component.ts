import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  person:any;
  model:any;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.personinfo();
  }

  personinfo(){
    this.http.get<any>(`${environment.apiUrl}api/Auth/personInfo`).subscribe(
      res=>{
        this.person=res;
        console.log(res);
      },
      error=>{
        this.router.navigate(['/']);
        alert(error.message);
      }
    )
  }
  Edit(){
    this.model={
      firstName: this.person.firstName,
      lastName:this.person.lastName
    }
    this.http.put<any>(`${environment.apiUrl}api/Auth/updateInfo`,this.model).subscribe(
      res=>{
        alert("Edited profile");
      },
      error=>{
        alert(error.message);
      }
    )
  }
}
