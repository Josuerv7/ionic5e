import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombres = ['Juan', 'Pedro', 'María'];
  nombre: string = '';
  seleccionados: string[] = []; // To store multiple selected names

  constructor() {}

  agregarNombre() {
    if (this.validarNombre(this.nombre)) {
      this.nombres.push(this.nombre);
      this.nombre = '';
    } else {
      // Handle invalid name
    }
  }

  validarNombre(nombre: string): boolean {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(nombre);
  }

  eliminarNombre() {
    for (const nombre of this.seleccionados) {
      const index = this.nombres.indexOf(nombre);
      if (index !== -1) {
        this.nombres.splice(index, 1);
      }
    }
    this.seleccionados = []; // Limpia la selección después de eliminar los nombres
  }
  

  guardarNombresEnArchivo() {
    const nombresTexto = JSON.stringify(this.nombres);
    const blob = new Blob([nombresTexto], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nombres.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}