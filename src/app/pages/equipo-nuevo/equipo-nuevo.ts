import { Component, inject } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipo-nuevo',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './equipo-nuevo.html',
  styleUrl: './equipo-nuevo.css',
})
export class EquipoNuevo {

  private equipoService = inject(EquipoService);
  private router = inject(Router);

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    rol:    new FormControl('', [Validators.required]),
    email:  new FormControl('', [Validators.required, Validators.email]),
    proyectos:  new FormControl(0, [Validators.required, Validators.min(0)])
  });

  get nombre(){ return this.formulario.get('nombre');}
  get rol(){ return this.formulario.get('rol');}
  get email(){ return this.formulario.get('email');}
  get proyectos(){ return this.formulario.get('proyectos');}

  guardar(): void{
    if(this.formulario.valid){
      const valores = this.formulario.value;
      this.equipoService.agregarMiembro({
        id: Date.now(),
        nombre: valores.nombre!,
        rol: valores.rol!,
        email: valores.email!,
        avatar: this.generarAvatar(valores.nombre!),
        proyectos: valores.proyectos!,
        activo: true
      });
      this.router.navigate(['/equipo']);
    }
  }

  generarAvatar(nombre: string): string{
    return nombre.split(' ').map( n => n[0] ).join('').toUpperCase().slice(0,2);
  }

}
