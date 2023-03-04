import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarRoutes } from './core/enums/navbar-routes.enum';
import { AboutPageComponent } from './features/about/about-page/about-page.component';
import { ContactPageComponent } from './features/contact/contact-page/contact-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { PortfolioPageComponent } from './features/portfolio/portfolio-page/portfolio-page.component';

const routes: Routes = [
  { path: '', redirectTo: NavbarRoutes.Home, pathMatch: 'full' },
  { path: NavbarRoutes.Home, component: HomePageComponent },
  { path: NavbarRoutes.Portfolio, component: PortfolioPageComponent },
  { path: NavbarRoutes.About, component: AboutPageComponent },
  { path: NavbarRoutes.Contact, component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
