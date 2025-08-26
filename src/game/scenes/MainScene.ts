import Phaser from 'phaser';
import WorldGenerator from '../../utils/WorldGenerator'
import {EventBus} from "@/game/EventBus";

class MainScene extends Phaser.Scene
{
    worldGenerator: WorldGenerator;
    currentMap: Phaser.Tilemaps.Tilemap;
    currentLayer: Phaser.Tilemaps.TilemapLayer;

    constructor ()
    {
        super();
        this.worldGenerator = new WorldGenerator(15)
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

        EventBus.on('change-world-size', (size) => {
            this.changeWorldSize(size);
        });

        this.createWorld()
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
        this.currentLayer = this.currentMap.createBlankLayer('layer', tileset, 450, 256);

        const data = this.worldGenerator.world.grid;
        let y = 0;

        data.forEach(row => {
            row.forEach((tile, x) => {
                this.currentLayer.putTileAt(tile, x, y);
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
        this.worldGenerator = new WorldGenerator(size);
        this.createWorld();
    }
}

export default MainScene;