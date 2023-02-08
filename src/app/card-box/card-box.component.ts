import { Component, Input } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.scss']
})
export class CardBoxComponent {
  @Input() card!: Card;

}
