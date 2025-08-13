import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  nombres: string[] = [];
  nums: number[] = [];

  nombre(){
    for(var i = 0; i < 5; i++){
      const nombre = prompt("Ingrese el nombre " + i);
      if (nombre != null){
        this.nombres.push(nombre);
      }
    }
  }

  par(){
    for(var i = 0; i < 10; i++){
      const numero = Number(prompt("Ingrese un numero, contador: " + i));
      if (numero != null && numero % 2 == 0){
        this.nums.push(numero);
      }
    }
  }
}
