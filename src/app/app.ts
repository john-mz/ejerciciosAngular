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
  products: any = [{nombre: "juan", precio: 2000}, {nombre: "nigger", precio: 100}];
  tarea = {
    nombre: "",
    estado: ""
  };
  tareaArreglo: any = [];

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

  product(){
    let nombrex = prompt("ingrese nombre");
    let preciox = Number(prompt("Ingrese precio"));
    if (nombrex != null && preciox != null){
      this.products.push({nombre: nombrex, precio: preciox})
    }
  }

  tareita(){
    const dato = this.tarea;
    this.tareaArreglo.push(dato);
    console.log(this.tareaArreglo);
  }

}
