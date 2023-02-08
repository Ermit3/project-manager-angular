import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { Label } from '../models/label.model';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  labels: Label[] = [];

  getAllLabels(): Label[] {
    return this.labels;
  }

  getAllLabelsByCard(card: Card): Label[] {
    const labels = this.labels.filter(label => label.card === card);
    if (!labels) throw new Error('No labels found!');
    return labels
  }

  getLabelById(labelId: number): Label {
    const label = this.labels.find(label => label.id === labelId);
    if (!label) throw new Error('label not found!');
    return label
  }

  setLabel(label: Label): void {
    this.labels.push(label)
  }

  constructor() { }
}
