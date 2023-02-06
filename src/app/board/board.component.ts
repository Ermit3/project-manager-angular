import { Component } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss', '../card-box/card-box.component.scss']
})
export class BoardComponent {
  tasks!: number[];
  card!: Card[];
  displayed!: string;

  closeCard() {
    this.displayed = 'display-none';
  }
  openCard() {
    this.displayed = 'display-block';
  }

  ngOnInit() {
    this.tasks = [];
    this.closeCard()
  }

  addCard() {
    this.tasks.push(0)
  }


}
