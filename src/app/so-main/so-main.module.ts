import { NgModule } from '@angular/core';
import { UpgradeModule } from "@angular/upgrade/static";
import { setUpLocationSync } from "@angular/router/upgrade";


import { SoMainComponent } from './so-main.component';
import { SoMainRouting } from "./so-main-routing.module";
import {module} from './soangualrjsapp';


@NgModule({
    imports: [ 
        UpgradeModule,
        SoMainRouting],
    exports: [SoMainComponent],
    declarations: [SoMainComponent],
    providers: [],
})
export class SoMainModule { 
    constructor(upgrade: UpgradeModule) {
    console.log(module.name);
    upgrade.bootstrap(document.body, [module.name]);
    setUpLocationSync(upgrade);
  }
}
