import { Action } from "./event";
import { Player } from "./player";

export class Room {
    number : string;
    status : string;
    players : Object;
    constructor (number : string, player : Player) {
        this.number = number;
        this.status = Action.OPEN;
        this.players = [ { "seat" : 1 , "role" : "" , "player" : player} ]
    }
}