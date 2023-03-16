import { Component } from '@angular/core';
import { NavbarRoutes } from 'src/app/core/enums/navbar-routes.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public NavbarRoutes = NavbarRoutes;

}
