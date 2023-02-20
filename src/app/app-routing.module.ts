import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { Page404Component } from './page404/page404.component';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"contact", component:ContactComponent},
  {path:"about", component:AboutComponent},
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path:"**", component:Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
