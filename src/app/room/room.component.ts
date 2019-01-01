import { Component, OnInit } from '@angular/core';
import { WerewolfService } from '../werewolf.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  private playername: string;
  private roomnumber: string;

  constructor(private werewolf: WerewolfService, private route: ActivatedRoute, private cookieService: CookieService, private router: Router) { }


  ngOnInit() {
    // this.roomnumber = this.route.snapshot.paramMap.get('room');
    this.playername = this.cookieService.get('playername');
    this.roomnumber = this.cookieService.get('roomnumber');
    if(!this.playername || !this.roomnumber || this.route.snapshot.paramMap.get('room') != this.roomnumber ){
      this.router.navigate(["/game"])
    }
    const con = this.werewolf.setConnection("room_" + this.roomnumber);
    this.werewolf.messages.subscribe(msg => {
      console.log(msg);
    })
  }

  sendMessage() {
    this.werewolf.sendMsg("test message");
  };

}