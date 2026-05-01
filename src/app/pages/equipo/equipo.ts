import { Component, inject } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-equipo',
  imports: [RouterLink],
  templateUrl: './equipo.html',
  styleUrl: './equipo.css',
})
export class Equipo {

  private equipoService = inject(EquipoService);

  miembros = this.equipoService.miembros;
  totalMiembros = this.equipoService.totalMiembros;
  miembrosActivos = this.equipoService.miembrosActivos;

}
