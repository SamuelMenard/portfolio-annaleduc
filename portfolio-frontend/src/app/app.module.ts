import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PortfolioPageComponent } from './features/portfolio/pages/portfolio-page/portfolio-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { ContactPageComponent } from './features/contact/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './features/about/pages/about-page/about-page.component';
import { PortfolioProjectComponent } from './features/portfolio/components/portfolio-project/portfolio-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/components/footer/footer.component';
import { ImageTextSectionComponent } from './shared/components/image-text-section/image-text-section.component';
import { PortfolioProjectPageComponent } from './features/portfolio/pages/portfolio-project-page/portfolio-project-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioPageComponent,
    NavbarComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    PortfolioProjectComponent,
    FooterComponent,
    ImageTextSectionComponent,
    PortfolioProjectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
