import World from './World'
import Tile from "@/utils/Tile";
import {randomChoice} from "@/utils/Utils";
import Cell from "@/utils/Cell";


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

    waveFunctionCollapse(refreshWorld: () => void, stepsCount: number|null): void {
        console.log("WaveFunctionCollapse");
        let i : number = 0
        while (true){
            let cellsWithLowestEntropy: Cell[] = this.world.getMinEtropyCells()
            console.log((cellsWithLowestEntropy.length))
            if(cellsWithLowestEntropy.length != 0){
                let cell: Cell = randomChoice(cellsWithLowestEntropy)
                cell.collapseWithRandomTile()
                this.world.updateEntropies(cell);
                refreshWorld()

                // i++;
                // if(stepsCount){
                //     if(i >= stepsCount){break}
                // }
            }
            else{
                break;
            }
        }
    }

}

export default WorldGenerator;