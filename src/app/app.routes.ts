import { Routes } from '@angular/router';
import {GameListComponent} from './components/game-list/game-list.component';
import {CreateUpdateComponent} from './components/create-update/create-update.component';

export const routes: Routes = [
  {path: '', component: GameListComponent},
  {path: 'createUpdate', component: CreateUpdateComponent}
];
