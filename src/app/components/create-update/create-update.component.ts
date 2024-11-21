import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';
import {Game} from '../../classes/game'
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-update.component.html',
  styleUrl: './create-update.component.css'
})
export class CreateUpdateComponent implements OnInit {
  public game: Game;
  constructor(private _gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.game = this._gameService.getter();
  }

  createOrUpdate() {
    if (this.game._id == undefined) {
      this._gameService.createGame(this.game).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          console.error(error);
        }
      )
    }
    else {
      this._gameService.updateGame(this.game).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          console.error(error);
        }
      )
    }
  }


}
