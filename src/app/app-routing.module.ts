import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { GameComponent } from './game/game.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {"path" : "", redirectTo : "/home", pathMatch : "full"},
  {"path" : "home", component : HomeComponent},
  {"path" : "bio", component : BioComponent},
  {"path" : "game", component : GameComponent},
  {"path" : "game/:room", component : RoomComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
