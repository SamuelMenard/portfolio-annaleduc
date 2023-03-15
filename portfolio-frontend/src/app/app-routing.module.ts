import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarRoutes } from './core/enums/navbar-routes.enum';
import { AboutPageComponent } from './features/about/pages/about-page/about-page.component';
import { ContactPageComponent } from './features/contact/pages/contact-page/contact-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { PortfolioPageComponent } from './features/portfolio/pages/portfolio-page/portfolio-page.component';

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
