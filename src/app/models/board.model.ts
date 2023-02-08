import { Card } from "./card.model";

export class Board {
    id!: number;
    title!: string;
    checked?: string;
    createdDate!: Date;
    card: Card[] = [];
}