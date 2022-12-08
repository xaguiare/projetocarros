
import { NgModule } from "@angular/core";
import {FotosComponent} from "./foto/foto.component";

import { FotolistComponent } from './fotolist/fotolist.component';

import { FotoformComponent } from './fotoform/fotoform.component';

;


@NgModule({
    declarations: [
        FotosComponent,
        FotolistComponent,
        FotoformComponent,        
    ],

    exports:[
        FotoformComponent,
        FotosComponent, 
        FotolistComponent
    ]
})
export class FotografiaModule{}
