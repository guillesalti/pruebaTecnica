import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { LocalidadesListComponent } from "./pages/localidades-list/localidades-list.component";
import { VendedoresListComponent } from "./pages/vendedores-list/vendedores-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, LocalidadesListComponent, VendedoresListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebaAngular';
}
