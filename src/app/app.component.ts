import { Component } from '@angular/core';
import { Board } from './models/board.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = '02-project-manager';

	boards!: number[];
	board!: Board[];

	ngOnInit() {
		this.boards = [0];
	}

	addBoard() {
		this.boards.push(0)
	}
}
