import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { appRoutes } from "./app.rotues";




@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,
            {enableTracing:true})
    ],
    exports:[
        RouterModule
    ]
    
})
export class AppRoutingModule { }

