import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  num1: string = '';
  num2: string = '';
  result: number | null = null;
  operation: string = '';

  constructor(private router: Router){

  }

  calculate(op: 'sum' | 'sub' | 'mul' | 'div' | 'sen' | 'cos' | 'tan' | 'pot' | 'log' | 'ln' | 'porc' | 'raiz' | 'salir') {
    const a = Number(this.num1);
    const b = Number(this.num2);

    if (op === 'salir'){
      this.router.navigate(['/login']);
      return;
    }

    if ((op !== 'sen' && op !== 'cos' && op !== 'tan' && op !== 'ln' && op !== 'log' && op !== 'raiz') && (isNaN(a) || isNaN(b))) {
      this.result = null;
      this.operation = 'Error: valores inválidos';
      return;
    }

    switch(op) {
      case 'sum':
        this.result = a + b;
        this.operation = 'Suma';
        break;
      case 'sub':
        this.result = a - b;
        this.operation = 'Resta';
        break;
      case 'mul':
        this.result = a * b;
        this.operation = 'Multiplicación';
        break;
      case 'div':
        this.result = b !== 0 ? a / b : NaN;
        this.operation = 'División';
        break;
      case 'sen':
        this.result = Math.sin(a);
        this.operation = 'Seno';
        break;
      case 'cos':
        this.result = Math.cos(a);
        this.operation = 'Coseno';
        break;
      case 'tan':
        this.result = Math.tan(a);
        this.operation = 'Tangente';
        break;
      case 'pot':
        this.result = Math.pow(a, b);
        this.operation = 'Potencia';
        break;
      case 'log':
        this.result = a > 0 ? Math.log10(a) : NaN;
        this.operation = 'Logaritmo base 10';
        break;
      case 'ln':
        this.result = a > 0 ? Math.log(a) : NaN;
        this.operation = 'Logaritmo natural';
        break;
      case 'porc':
        this.result = (a * b) / 100;
        this.operation = 'Porcentaje';
        break;
      case 'raiz':
        this.result = a >= 0 ? Math.sqrt(a) : NaN;
        this.operation = 'Raíz cuadrada';
        break;
      default:
        this.result = null;
        this.operation = 'Error: operación desconocida';
    }
  }
}
