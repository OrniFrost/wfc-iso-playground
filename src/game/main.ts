import MainScene from "./scenes/MainScene"
import { AUTO, Game } from 'phaser';


// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 1024,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        MainScene,
    ]
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
