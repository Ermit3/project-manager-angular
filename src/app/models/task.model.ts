import { Card } from "./card.model";

export class Task {
    id!: number;
    title!: string;
    checked!: string;
    createdDate!: Date;
    card!: Card
}