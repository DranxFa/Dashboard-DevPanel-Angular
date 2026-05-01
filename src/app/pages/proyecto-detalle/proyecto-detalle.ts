import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';
import { Proyecto } from '../../models';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-proyecto-detalle',
  imports: [TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './proyecto-detalle.html',
  styleUrl: './proyecto-detalle.css',
})
export class ProyectoDetalle {
  
  private route = inject(ActivatedRoute);
  private proyectoService = inject(ProyectosService);

  proyecto = signal<Proyecto | null>(null);

  constructor(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.proyecto.set(this.proyectoService.getProyectoPorId(id) || null);
  }

  colorEstado(estado: string): string {
    switch(estado) {
      case 'activo':     return 'bg-green-100 text-green-700';
      case 'pausado':    return 'bg-yellow-100 text-yellow-700';
      case 'completado': return 'bg-blue-100 text-blue-700';
      default:           return 'bg-gray-100 text-gray-700';
    }
  }
}
