import Cell from "@/utils/Cell";
import Tile from "@/utils/Tile";
import Direction from "@/utils/Directions";

class World {
    size: number;
    grid: Cell[][];
    tiles: Tile[];

    constructor(size: number, tiles: Tile[]) {
        this.size = size;
        this.tiles = [...tiles];
        this.grid = [];
        for (let i = 0; i < size; i++) {
            this.grid[i] = [];
            for (let j = 0; j < size; j++) {
                this.grid[i][j] = new Cell(i,j, [...tiles]);
            }
        }

        for (let y=0; y<size; y++) {
            for (let x = 0; x < size; x++) {
                if (y > 0) {
                    this.grid[x][y].neighbors.set(Direction.North, this.grid[x][y-1]);
                }
                if (x < size-1) {
                    this.grid[x][y].neighbors.set(Direction.East, this.grid[x+1][y]);
                }
                if (y < size-1) {
                    this.grid[x][y].neighbors.set(Direction.South, this.grid[x][y+1]);
                }
                if (x > 0){
                    this.grid[x][y].neighbors.set(Direction.West, this.grid[x-1][y]);
                }
            }
        }

        let middle = Math.floor(this.size / 2);
        this.grid[middle][middle].possibleTiles = [this.tiles[2]];
        this.grid[middle][middle].isCollapsed = true;

        this.updateEntropies(this.grid[middle][middle])
    }

    updateEntropies(cell: Cell): void {

        if (cell.isCollapsed){
            for (var [direction, neighborCell] of cell.neighbors){
                if (!neighborCell.isCollapsed){
                    let newPossibleTiles: Tile[] = []
                    for (let tile of neighborCell.possibleTiles){
                        if (cell.possibleTiles[0].matchToOther(tile,direction)){
                            newPossibleTiles.push(tile);
                        }
                    }
                    neighborCell.possibleTiles = newPossibleTiles;
                    this.updateEntropies(neighborCell)
                }
            }
        }else{
            for (var [direction, neighborCell] of cell.neighbors){
                if (!neighborCell.isCollapsed){
                    const newPossibleTiles: Tile[] = []
                    for (let tile of cell.possibleTiles){
                        const possibleTiles: Tile[] = []
                        for (let t of neighborCell.possibleTiles){
                            let res: boolean = false;

                            for (let ti of newPossibleTiles){
                                if (ti.id === t.id) {res = true}
                            }

                            if (tile.matchToOther(t,direction) && !res){
                                possibleTiles.push(t);
                            }
                        }
                        newPossibleTiles.push(...possibleTiles)
                    }
                    if(neighborCell.possibleTiles.length != newPossibleTiles.length){
                        neighborCell.possibleTiles = [...newPossibleTiles];
                        this.updateEntropies(neighborCell)
                    }
                }
            }
        }
    }

    getMinEtropyCells(): Cell[]{
        console.log("Getting minEtropy cells");
        let minEntropyCells: Cell[] = [];
        let minEntropy: number = Infinity

        for (let row of this.grid){
            for (let cell of row){
                if (!cell.isCollapsed){
                    if (cell.getEntropy() < minEntropy){
                        minEntropy = cell.getEntropy();
                    }
                }
            }
        }

        for (let row of this.grid){
            for (let cell of row){
                if (!cell.isCollapsed){
                    if (cell.getEntropy() == minEntropy){
                        minEntropyCells.push(cell);
                    }
                }
            }
        }

        return minEntropyCells;
    }
}

export default World;