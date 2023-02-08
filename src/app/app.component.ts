import { Component, OnInit } from '@angular/core';
import { Board } from './models/board.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = '02-project-manager';

	Boards: Board[] = [];
	board!: Board;

	ngOnInit() {
		this.board = new Board();
		this.board.id = this.Boards.length;
		this.board.title = "Board" + this.Boards.length;
		this.board.createdDate = new Date();

		this.Boards[0] = this.board;
	}

	addBoard() {
		this.board = new Board();
		this.board.id = this.Boards.length;
		this.board.title = "Board" + this.Boards.length;
		this.board.createdDate = new Date();

		this.Boards.push(this.board);
		console.log(this.Boards);
	}
}
