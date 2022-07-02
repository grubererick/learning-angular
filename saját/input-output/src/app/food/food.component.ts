import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() menu = 'Pizza';
  @Output() newFoodEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  addNewFood(value: string) {
    this.newFoodEvent.emit(value);
  }

}
