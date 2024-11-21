import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GameService } from '../../services/game.service';
import { Game } from '../../classes/game';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private gameService: GameService){}

  ngOnInit(): void {}

  newGame(event: any) {
    event.preventDefault();
    this.gameService.setter(new Game());
    this.router.navigate(['/createUpdate']);
  }
}
