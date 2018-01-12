import { Routes } from "@angular/router";

import { LoginComponent  } from "../app/login/login.component";



export const appRoutes: Routes = [
    { path: 'so-app',loadChildren:'app/login/login.module#LoginModule' },
    { path: '',   redirectTo: '/so-app', pathMatch: 'full' }

  ];
