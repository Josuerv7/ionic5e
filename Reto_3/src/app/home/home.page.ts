import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importa el servicio AlertController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado = '';
  selectedOption: string = ''; // Variable para almacenar la opción seleccionada

  constructor(private alertController: AlertController) {} // Inyecta el servicio AlertController

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: 'Tus selecciones:',
      message: this.resultado,
      buttons: ['OK']
    });

    await alert.present();
  }

  Seleccionar() {
    let cont = '';

    // Usamos la variable selectedOption para verificar la opción seleccionada
    if (this.selectedOption === 'H') {
      cont = "Has seleccionado: Correr" ;
    }
    if (this.selectedOption === 'P') {
      cont = "Has seleccionado: Futbol" ;
    }
    if (this.selectedOption === 'T') {
      cont = "Has seleccionado: Basquetbol";
    }
    if (this.selectedOption === 'HD') {
      cont = "Has seleccionado: Voleybol";
    }

    this.resultado = cont;
    this.presentAlert(); // Llama a la función para mostrar el resultado en el showAlert
  }
}
