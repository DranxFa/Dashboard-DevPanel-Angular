export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  estado: 'activo' | 'pausado' | 'completado';
  progreso: number; // 0-100
  tecnologias: string[];
  fechaInicio: string;
  miembros: number;
}

export interface Miembro {
  id: number;
  nombre: string;
  rol: string;
  email: string;
  avatar: string;
  proyectos: number;
  activo: boolean;
}

export interface Metrica {
  label: string;
  valor: number;
  icono: string;
  color: string;
}