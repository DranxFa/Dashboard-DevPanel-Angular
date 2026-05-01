import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Proyectos } from './pages/proyectos/proyectos';
import { ProyectoDetalle } from './pages/proyecto-detalle/proyecto-detalle';
import { Equipo } from './pages/equipo/equipo';
import { EquipoNuevo } from './pages/equipo-nuevo/equipo-nuevo';

export const routes: Routes = [
    { path: '', component: Dashboard},
    { path: 'proyectos', component: Proyectos},
    { path: 'proyectos/:id', component: ProyectoDetalle},
    { path: 'equipo', component: Equipo},
    { path: 'equipo/nuevo', component: EquipoNuevo},
    { path: '**', redirectTo:''}
];
