import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Proyecto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {

  private http = inject(HttpClient);

  proyectos = signal<Proyecto[]>([
    {
      id: 1,
      nombre: 'E-commerce Platform',
      descripcion: 'Plataforma de ventas online con carrito y pagos integrados.',
      estado: 'activo',
      progreso: 75,
      tecnologias: ['Angular', 'Node.js', 'PostgreSQL'],
      fechaInicio: '2024-01-15',
      miembros: 4
    },
    {
      id: 2,
      nombre: 'CRM Interno',
      descripcion: 'Sistema de gestión de clientes para el equipo de ventas.',
      estado: 'pausado',
      progreso: 40,
      tecnologias: ['Angular', 'Python', 'MongoDB'],
      fechaInicio: '2024-03-01',
      miembros: 3
    },
    {
      id: 3,
      nombre: 'App Móvil',
      descripcion: 'Aplicación móvil multiplataforma para clientes finales.',
      estado: 'activo',
      progreso: 90,
      tecnologias: ['Ionic', 'Angular', 'Firebase'],
      fechaInicio: '2023-11-20',
      miembros: 5
    },
    {
      id: 4,
      nombre: 'Dashboard Analytics',
      descripcion: 'Panel de métricas y reportes en tiempo real.',
      estado: 'completado',
      progreso: 100,
      tecnologias: ['Angular', 'D3.js', 'AWS'],
      fechaInicio: '2023-08-10',
      miembros: 2
    },
  ]);
  
  totalProyectos = computed(() => this.proyectos().length);
  proyectosActivos = computed(() => this.proyectos().filter(p => p.estado === 'activo').length);
  progresoPromedio = computed(() => {
    const total = this.proyectos().reduce((acc,p) => acc + p.progreso, 0);
    return Math.round(total/ this.proyectos().length)
  });

  getProyectoPorId(id: number): Proyecto | undefined{
    return this.proyectos().find(p => p.id === id);
  }

  filtrarPorEstado(estado: string): Proyecto[]{
    if(estado === 'todos') return this.proyectos();
    return this.proyectos().filter(p => p.estado === estado);
  }

}
