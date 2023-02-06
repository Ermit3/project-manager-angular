import { Component } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  tasks!: number[];
  card!: Card[];

  ngOnInit() {
    this.tasks = [];
  }

  addCard() {
    this.tasks.push(0)
  }

}
