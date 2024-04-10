
import { Component } from '@angular/core';

 

@Component({

    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],


})

export class HomePage {

 resultado="";

  name:string = "";

  surname:string = '';

  email:string = '';

  

  showWelcome() {
    this.resultado=(`Bienvenido, ${this.name} ${this.surname}! Su correo electrónico es ${this.email}`);
    // Mostrar el mensaje de bienvenida

    alert(`Bienvenido, ${this.name} ${this.surname}! Su correo electrónico es ${this.email}`);

  }

 

}

 