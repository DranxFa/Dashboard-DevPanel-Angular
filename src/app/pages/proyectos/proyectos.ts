import { Component, inject, signal } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {

  private proyectoService = inject(ProyectosService);

  filtroActivo = signal<string>('todos');

  proyectosFiltrados = this.proyectoService.proyectos;

  filtros = ['todos', 'activo', 'pausado', 'completado'];

  filtrar(estado: string): void {
    this.filtroActivo.set(estado);
    this.proyectosFiltrados = signal(
      this.proyectoService.filtrarPorEstado(estado)
    );
  }

  colorEstado(estado: string): string {
    switch(estado){
      case 'activo': return 'bg-green-100 text-green-700';
      case 'pausado': return 'bg-yellow-100 text-yellow-700';
      case 'completado': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

}
