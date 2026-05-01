import { Component, computed, inject } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private equipoService = inject(EquipoService);
  private proyectoService = inject(ProyectosService);

  totalProyectos = this.proyectoService.totalProyectos;
  proyectosActivos = this.proyectoService.proyectosActivos;
  progresoPromedio = this.proyectoService.progresoPromedio;
  totalMiembros = this.equipoService.totalMiembros;
  miembrosActivos = this.equipoService.miembrosActivos;

  proyectosRecientes = computed(() => 
    this.proyectoService.proyectos().slice(0,3)
  );


}
