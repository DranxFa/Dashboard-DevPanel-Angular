import { computed, Injectable, signal } from '@angular/core';
import { Miembro } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {

  miembros = signal<Miembro[]>([
  {
    id: 1,
    nombre: 'Ana García',
    rol: 'Frontend Developer',
    email: 'ana@devpanel.com',
    avatar: 'AG',
    proyectos: 3,
    activo: true
  },
  {
    id: 2,
    nombre: 'Carlos López',
    rol: 'Backend Developer',
    email: 'carlos@devpanel.com',
    avatar: 'CL',
    proyectos: 2,
    activo: true
  },
  {
    id: 3,
    nombre: 'María Torres',
    rol: 'UI/UX Designer',
    email: 'maria@devpanel.com',
    avatar: 'MT',
    proyectos: 4,
    activo: false
  },
  {
    id: 4,
    nombre: 'Diego Ramírez',
    rol: 'DevOps Engineer',
    email: 'diego@devpanel.com',
    avatar: 'DR',
    proyectos: 1,
    activo: true
  },
]);

  totalMiembros = computed(()=> this.miembros().length);
  miembrosActivos = computed(()=> this.miembros().filter(m => m.activo).length);

  agregarMiembro(miembro: Miembro): void{
    if(miembro){
      this.miembros.update(m => [...m, {
        ...miembro, 
        id: Date.now(), 
        activo: true
      }]);
    }
  }

}
