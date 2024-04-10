import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = "";
  descripcion = "";
  cantidad = 0;
  precioCosto = 0;
  precioVenta = 0;
  urlFotografia = "";
  productos: any[] = [];

  constructor() {}

  AgregarProducto() {
    if (!!this.nombre && !!this.descripcion) {
      const producto = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        cantidad: this.cantidad,
        precioCosto: this.precioCosto,
        precioVenta: this.precioVenta,
        urlFotografia: this.urlFotografia,
      };
      this.productos.push(producto);

      // Reinicia los campos
      this.nombre = "";
      this.descripcion = "";
      this.cantidad = 0;
      this.precioCosto = 0;
      this.precioVenta = 0;
      this.urlFotografia = "";
    }
  }
}
