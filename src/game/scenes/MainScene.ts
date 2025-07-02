import Phaser from 'phaser';
import WorldGenerator from '../../utils/WorldGenerator'

class MainScene extends Phaser.Scene
{
    worldGenerator: WorldGenerator;

    constructor ()
    {
        super();
        this.worldGenerator = new WorldGenerator(15)
        this.worldGenerator.randomizeWorld(4);
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('tiles', 'src/assets/test_tilemap.png');
    }

    create ()
    {
        const mapData = new Phaser.Tilemaps.MapData({
            width: this.worldGenerator.size,
            height: this.worldGenerator.size,
            tileWidth: 64,
            tileHeight: 32,
            orientation: Phaser.Tilemaps.Orientation.ISOMETRIC,
            format: Phaser.Tilemaps.Formats.ARRAY_2D
        });

        const map = new Phaser.Tilemaps.Tilemap(this, mapData);

        const tileset = map.addTilesetImage('test_tilemap', 'tiles');

        const layer = map.createBlankLayer('layer', tileset, 450, 256);

        const data = this.worldGenerator.world.grid;

        let y = 0;

        data.forEach(row => {

            row.forEach((tile, x) => {

                layer.putTileAt(tile, x, y);

            });

            y++;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: MainScene
};

const game = new Phaser.Game(config);

export default MainScene;