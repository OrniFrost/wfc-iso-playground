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