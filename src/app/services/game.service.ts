import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Game} from '../classes/game'

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: Game;
  // private baseUri: string = "http://localhost:10000/";
  private baseUri: string = "https://mean-games-backend.onrender.com:10000/";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  createGame(game: Game) {
    return this.http.post(this.baseUri, game, {headers: this.headers});
  }

  getGames() {
    return this.http.get(this.baseUri, {headers: this.headers});
  }

  updateGame(game: Game) {
    return this.http.put(this.baseUri, game, {headers: this.headers});
  }

  deleteGame(id: string | undefined) {
    return this.http.delete(this.baseUri + id, {headers: this.headers});
  }

  setter(game: Game) {
    this.game = game;
  }

  getter() {
    return this.game;
  }
}
