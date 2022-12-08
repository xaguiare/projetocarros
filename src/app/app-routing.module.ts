import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FotoformComponent } from './fotografia/fotoform/fotoform.component';
import { FotolistComponent } from './fotografia/fotolist/fotolist.component';


const routes: Routes = [
  {path: 'foto', component: FotolistComponent},
  {path: 'formulario', component: FotoformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
