import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentFood = 'potato chips';

  foods = ['Créme Brulé', 'Gundel Palacsinta'];

  addBevrage(newFood: string) {
    this.foods.push(newFood);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('food-input');
    input.value = '';
  }
}
