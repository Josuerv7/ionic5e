import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  option1 = false;
  option2 = false;
  option3 = false;
  selectedOptions: string[] = [];
  showAlert = false;

  constructor(private alertController: AlertController) {}

  async onSubmit() {
    this.selectedOptions = [
      this.option1 ? 'Caminar' : '',
      this.option2 ? 'Correr' : '',
      this.option3 ? 'Trotar' : ''
    ];

    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 2000); // Cierra el alert después de 2 segundos
  }
}



