import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router'
import {Game} from '../../classes/game';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit {

  public games: any[];

  constructor(private _gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.readGames();
  }

  readGames() {
    this._gameService.getGames().subscribe(
      (data: any) => {
        console.log(data);
        this.games = data['msg'];
      },
      error => {
        console.error(error);
      }
    );
  }

  doUpdate(game: Game) {
    this._gameService.setter(game);
    this.router.navigate(['/createUpdate']);
  }

  doDelete(game: Game) {
    this._gameService.deleteGame(game._id).subscribe(
      data => {
        this.games.splice(this.games.indexOf(game), 1);
      },
      error => {
        console.error(error);
      }
    )
  }

}
