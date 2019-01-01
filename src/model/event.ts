// Actions you can take on the App
export enum Action {
    JOINED = 'JOINED',
    LEFT = 'LEFT',
    START = 'START',
    CLOSE = 'CLOSE',
    OPEN = 'OPEN'
}

// Socket.io events
export enum Event {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect'
}