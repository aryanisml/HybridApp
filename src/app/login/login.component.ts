import { Component, OnInit, NgZone } from '@angular/core';
import {FormBuilder,FormGroup,Validators  } from "@angular/forms";

import { LoginModel } from "./login.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    loginForm : FormGroup;
    loginInfo: LoginModel;

    constructor(private fb : FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private ngZone: NgZone) {
           this.createForm();
     }
    ngOnInit() { }

    private createForm(){
        this.loginForm=this.fb.group({
           username: ['', Validators.required],
           password:['', Validators.required]
        });
    }
   

    prepareLoginSave() : LoginModel{
       const formModel= this.loginForm.value;
        const loginSave={
           username : formModel.username,
           password :formModel.password
       }
       return  loginSave;
    }


    onSubmit(){
        this.loginInfo = this.prepareLoginSave();
        console.dir(this.loginInfo);
      //  this.router.navigate(['somain'], { replaceUrl: true });
      this.router.config.push( { path: 'somainapp',loadChildren:'app/so-main/so-main.module#SoMainModule'});
      this.ngZone.run(() => this.router.navigateByUrl('somainapp'))
        //this.router.navigate(['so-main']);
       // console.log(routerConfig);
        
    }


}