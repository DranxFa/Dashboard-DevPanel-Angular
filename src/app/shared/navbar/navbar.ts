import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    enlaces = [
    { label: 'Dashboard',  icon: '📊', ruta: '/' },
    { label: 'Proyectos',  icon: '🗂️', ruta: '/proyectos' },
    { label: 'Equipo',     icon: '👥', ruta: '/equipo' },
  ];
}
