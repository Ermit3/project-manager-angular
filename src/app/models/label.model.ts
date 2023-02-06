import { Card } from "./card.model";

export class Label {
    id!: number;
    title!: string;
    color!: string;
    createdDate!: Date;
    card!: Card;
}