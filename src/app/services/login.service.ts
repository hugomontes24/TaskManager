import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './../models/login-view-model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  currentUserName: string = "";
  // loginViewModel: LoginViewModel = new LoginViewModel();

  constructor( private httpClient: HttpClient ) { }

  public login( loginViewModel: LoginViewModel): Observable<any>{
    return this.httpClient.post<any>(`http://localhost/angular/TaskManager/src/app/api/login.php?action=auth`, JSON.stringify( loginViewModel ), {responseType: "json"} )
    .pipe(map(user => {
      if(user){
        this.currentUserName = user.userName;
      }
      return user;
    }));
  }

  public logout(){
    this.currentUserName = "";
  }
}
