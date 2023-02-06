import { Board } from "./board.model";
import { Label } from "./label.model";
import { Task } from "./task.model";

export class Card {
    id!: number;
    createdBy!: string;
    title!: string;
    description!: string;
    deadline!: Date;
    createdDate!: Date;
    labels!: Label[];
    tasks!: Task[];
    board!: Board;
}