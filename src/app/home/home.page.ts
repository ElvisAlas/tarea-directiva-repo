import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel,IonButton,IonItem,IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule,IonHeader, IonToolbar, IonTitle, IonContent,IonLabel,IonButton,IonItem,IonInput],
})
export class HomePage {

  nombres: string[] = ['Perro', 'Gato', 'Pájaro', 'Conejo', 'Pez'];
  contador: number = 0;
  phoneNumber: string="";
  incrementarContador() {
    this.contador +=1;
  }
  valor: number = Math.floor(Math.random() * 101)
  textColor: string = '#2aff2b';

  colorButton: string = "dark"; 
  constructor() {}
}
