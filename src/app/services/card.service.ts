import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { Card } from '../models/card.model';
import { Label } from '../models/label.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: Card[] = [];
  card!: Card;

  getAllCards(): Card[] {
    return this.cards;
  }

  getAllCardsByBoard(board: Board): Card[] {
    let cards = this.cards.filter(card => card.board === board);
    if (!cards) { cards = []; }
    return cards
  }

  getCardById(cardId: number): Card {
    const card = this.cards.find(card => card.id === cardId);
    if (!card) throw new Error('Card not found!');
    return card
  }

  setCard(card: Card): void {
    this.cards.push(card)
  }

  // setCard(createdBy: string, title: string, description: string, deadline: Date | null, createdAt: Date, labels: Label[] | any[], tasks: Task[] | any[], board: Board): void {
  //   this.card = new Card();
  //   this.card.createdBy = createdBy;
  //   this.card.title = title;
  //   this.card.description = description;
  //   this.card.deadline = deadline == null ? new Date() : deadline;
  //   this.card.createdAt = new Date();
  //   this.card.labels = labels == null ? [] : labels;
  //   this.card.tasks = tasks == null ? [] : tasks;
  //   this.card.board = board;
  //   this.cards.push(this.card)
  //   console.log(this.card);
  // }



  constructor() { }
}
