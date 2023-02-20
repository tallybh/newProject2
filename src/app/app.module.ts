import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HomeComponent } from './home/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { BindingComponent } from './home/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './home/pipes/pipes.component';
import { NumbersPipe } from './pipes/numbers.pipe';
import { DirectivesComponent } from './home/directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { WinterDirective } from './directives/winter.directive';
import { ProductsComponent } from './products/products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import {MatTableModule} from  '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ColorfulComponent } from './home/colorful/colorful.component';
import { ImputComponent } from './home/imput/imput.component';
import { OutputComponent } from './home/output/output.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    HomeComponent,
    BindingComponent,
    PipesComponent,
    NumbersPipe,
    DirectivesComponent,
    HighlightDirective,
    WinterDirective,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    Page404Component,
    ColorfulComponent,
    ImputComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
