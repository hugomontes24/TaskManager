import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from './../models/login-view-model';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  loginViewModel: LoginViewModel = new LoginViewModel();
  // loginViewModel: LoginViewModel = {
  //   userName: '', password: ''
  // };
  
  loginError: string = "";

 
  
  
  constructor (private loginService:LoginService, private router:Router){}
  
  ngOnInit(): void {
    
  }
  


  onLoginClick(event:any){
    this.loginService.login(this.loginViewModel).subscribe({
      next: (response)=>{
               console.log(response);
            },
      error: (err:Error)=>{
                console.log("error");
                this.loginError="Mot de passe ou email invalides."
              },
      complete: ()=> this.router.navigateByUrl("/dashboard")
                
    })
  }



}
