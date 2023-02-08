import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../models/board.model';
import { Card } from '../models/card.model';
import { Label } from '../models/label.model';
import { CardService } from '../services/card.service';
import { LabelService } from '../services/label.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss', './board-modal.component.scss', '../card-box/card-box.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board!: Board;

  constructor(private cardService: CardService, private labelService: LabelService) {
  }

  labels: Label[] = [];
  label?: Label;

  cards: Card[] = [];
  card!: Card;
  // modal display
  displayed!: string;
  // formulaire value
  title: string = "";
  description: string = "";
  deadline: string = "";
  color: string = "";
  labelText: string = "";

  cons() {
    console.log(this.color);

  }


  closeCard() {
    this.displayed = 'display-none';
  }
  openCard() {
    this.displayed = 'display-block';
  }

  ngOnInit() {
    console.log(this.board);

    this.closeCard()
  }

  addCard(title: string, description: string, deadline: string, color: string, labelText: string, board: Board) {
    /* card creation */
    this.card = this.setCard(title, description, deadline, board);
    this.cards.push(this.card);
    this.cardService.setCard(this.card);
    /* label creation */
    this.label = this.setLabel(title, color, this.card)
    // push in service
    this.labelService.setLabel(this.label)
    /* push label in card */
    this.card.labels.push(this.label);

    this.closeCard();
    this.resetForm()
    console.log(this.card);

  }

  // 
  setCard(title: string, description: string, deadline: string, board: Board) {
    this.card = new Card();
    this.card.id = this.cards.length;
    this.card.title = title;
    this.card.createdBy = "Erwan";
    this.card.description = description;
    this.card.deadline = deadline == "" ? new Date() : new Date(deadline);
    this.card.createdAt = new Date();
    this.card.board = this.board;

    return this.card
  }

  // Put label in Service
  setLabel(title: string, color: string, card: Card) {
    this.label = new Label();
    this.label.id = this.labels.length;
    this.label.title = title;
    this.label.color = color;
    this.label.card = card;
    this.label.createdAt = new Date();

    return this.label
  }

  resetForm() {
    this.title = "";
    this.description = "";
    this.deadline = "";
    this.color = "";
    this.labelText = "";
  }

}
