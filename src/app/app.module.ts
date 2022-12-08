import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotografiaModule } from './fotografia/fotografia.module';
 
NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
  
    FotografiaModule,
    AppRoutingModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
