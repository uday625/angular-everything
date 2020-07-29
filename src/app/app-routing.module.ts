import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {BreweriesComponent} from './breweries/breweries.component'
import {BindingComponent} from "./binding/binding.component"

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Breweries', component: BreweriesComponent} , 
  {path: 'Binding', component: BindingComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
