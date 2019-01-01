import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private playername = ""

  nameFormEx: FormControl;
  roomFormEx: FormControl;
  errorMessage = 'Custom error message';

  constructor( private cookieService: CookieService, private route: ActivatedRoute, private router: Router ) {
    this.nameFormEx = new FormControl('', Validators.required);
    this.roomFormEx = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

  joinRoom(playername, roomnumber){
    this.cookieService.set("playername", playername);
    this.cookieService.set("roomnumber", roomnumber);
    console.log(this.cookieService.get("playername"));
    // console.log(this.playername);
    console.log(this.cookieService.get("roomnumber"));
    this.router.navigate(["/game", roomnumber])
  }

}
