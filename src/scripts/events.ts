///<reference types="minecraft-scripting-types-shared" />

export const enum ChessEvents {
    JoinNewGame = 'chess:join_new_game',
    GameStarting = 'chess:notify_game_starting',
    SetPlayerNumber = 'chess:set_player_number',
    NotifyMouseCursor = 'chess:notify_mouse_cursor'
}

export interface SetPlayerNumberData {
    player: IEntityObject;
    number: number;
}

export interface NotifyMouseCursor {
    gameId: number,
    x: number,
    y: number,
    z: number
}

export const enum ChessUIEvents {
    JoinGame = "chess:join_game",
    CloseUI = "chess:close_ui",
    MouseMoved = "chess:on_mouse_move"
}

export interface UIEventData {
    name: string;
    data: any;
}

export interface MouseMoveUIEventData {
    x: number;
    y: number;
    screenWidth: number;
    screenHeight: number;
}