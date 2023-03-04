import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PortfolioPageComponent } from './features/portfolio/portfolio-page/portfolio-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { ContactPageComponent } from './features/contact/contact-page/contact-page.component';
import { AboutPageComponent } from './features/about/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioPageComponent,
    NavbarComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
