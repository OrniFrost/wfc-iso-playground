import World from './World'
import Tile from "@/utils/Tile";
import {randomChoice} from "@/utils/Utils";


class WorldGenerator {

    world: World;
    size: number;
    tiles: Tile[];

    constructor(size: number, tiles: Tile[]) {
        this.world = new World(size, tiles);
        this.tiles = tiles
        this.size = size;
    }

    randomizeWorld(nbTile: number): void{
        for(let i=0; i<this.size; i++){
            for(let j=0; j<this.size; j++){
                this.world.grid[i][j].possibleTiles = [randomChoice(this.world.grid[i][j].possibleTiles)]
            }
        }
    }

}

export default WorldGenerator;