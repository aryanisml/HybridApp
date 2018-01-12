import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule } from "@angular/forms";
import { UpgradeModule } from '@angular/upgrade/static';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from "./login-routing.module";


@NgModule({
    imports: [ 
        UpgradeModule,
        ReactiveFormsModule,
        LoginRoutingModule
        ],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule {
    
}

