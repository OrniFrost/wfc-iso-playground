import Phaser from 'phaser';
import WorldGenerator from '../../utils/WorldGenerator'
import {EventBus} from "@/game/EventBus";
import TilesConstructor from "@/utils/TilesConstructor";
import Direction from "@/utils/Directions";


class MainScene extends Phaser.Scene
{
    worldGenerator: WorldGenerator;
    currentMap: Phaser.Tilemaps.Tilemap | null = null;
    currentLayer: Phaser.Tilemaps.TilemapLayer | null = null;
    tilesConstructor : TilesConstructor;


    constructor ()
    {
        super();
        this.tilesConstructor = new TilesConstructor();
        this.worldGenerator = new WorldGenerator(15, this.tilesConstructor.tiles)

        // this.worldGenerator.randomizeWorld(4);
    }

    preload ()
    {
        this.load.image('tiles', 'src/assets/tilemap.png');
    }

    create ()
    {
        EventBus.on('randomize-world', () => {
            this.randomizeWorld();
        });

        EventBus.on('change-world-size', (size: any) => {
            this.changeWorldSize(size);
        });

        EventBus.on('wave-function-collapse', () => {
            this.generateWaveFunctionCollapse()
        })


        this.cameras.main.setZoom(1); // Initial zoom level


        this.input.on('wheel', (pointer: any, gameObjects: any, deltaX: number, deltaY: number) => {
            const currentZoom = this.cameras.main.zoom;

            const newZoom = deltaY > 0 ?
                Math.max(0.5, currentZoom - 0.1) : // Zoom out (min 0.5)
                Math.min(2, currentZoom + 0.1);    // Zoom in (max 2)

            this.cameras.main.setZoom(newZoom);
        })

        this.createWorld()
    }

    update() {

        const keyboard = this.input.keyboard;
        if (keyboard && keyboard.addKey) {
            const plusKey = keyboard.addKey('+');
            const minusKey = keyboard.addKey('-');

            if (plusKey.isDown) {
                this.cameras.main.setZoom(Math.min(2, this.cameras.main.zoom + 0.01));
            } else if (minusKey.isDown) {
                this.cameras.main.setZoom(Math.max(0.5, this.cameras.main.zoom - 0.01));
            }

            const moveSpeed = 8;

            const leftKey = keyboard.addKey('LEFT');
            const rightKey = keyboard.addKey('RIGHT');
            const upKey = keyboard.addKey('UP');
            const downKey = keyboard.addKey('DOWN');

            const wKey = keyboard.addKey('W');
            const aKey = keyboard.addKey('A');
            const sKey = keyboard.addKey('S');
            const dKey = keyboard.addKey('D');

            if (leftKey.isDown || aKey.isDown) {
                this.cameras.main.scrollX -= moveSpeed;
            } else if (rightKey.isDown || dKey.isDown) {
                this.cameras.main.scrollX += moveSpeed;
            }

            if (upKey.isDown || wKey.isDown) {
                this.cameras.main.scrollY -= moveSpeed;
            } else if (downKey.isDown || sKey.isDown) {
                this.cameras.main.scrollY += moveSpeed;
            }
        }
    }

    createWorld(){
        // Destroy existing tilemap if it exists
        if (this.currentLayer) {
            this.currentLayer.destroy();
        }
        if (this.currentMap) {
            this.currentMap.destroy();
        }

        const mapData = new Phaser.Tilemaps.MapData({
            width: this.worldGenerator.size,
            height: this.worldGenerator.size,
            tileWidth: 32,
            tileHeight: 16,
            orientation: Phaser.Tilemaps.Orientation.ISOMETRIC,
            format: Phaser.Tilemaps.Formats.ARRAY_2D,
        });

        this.currentMap = new Phaser.Tilemaps.Tilemap(this, mapData);
        const tileset = this.currentMap.addTilesetImage('tilemap', 'tiles',32,32);
        if (tileset) {
            this.currentLayer = this.currentMap.createBlankLayer('layer', tileset, 450, 256);
        }

        const data = this.worldGenerator.world.grid;
        let y = 0;

        data.forEach(row => {
            row.forEach((tile, x) => {
                if(tile.isCollapsed){

                    this.currentLayer?.putTileAt(tile.possibleTiles[0].id, y, x);
                }else{
                    this.currentLayer?.putTileAt(this.tilesConstructor.tiles[0].id, y, x);
                }

            });
            y++;
        });
    }


    randomizeWorld (): void {
        console.log('Randomize World Game');
        this.worldGenerator.randomizeWorld(39);
        this.createWorld();
    }

    changeWorldSize(size: number): void {
        console.log('Change WorldSize '+ size);
        this.worldGenerator = new WorldGenerator(size, this.tilesConstructor.tiles);
        this.createWorld();
    }

    generateWaveFunctionCollapse(): void {
        console.log('Generate WaveFunctionCollapse');
        this.worldGenerator.waveFunctionCollapse(() => this.createWorld(), 2);
        this.createWorld();

    }
}

export default MainScene;