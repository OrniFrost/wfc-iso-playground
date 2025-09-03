import Cell from "@/utils/Cell";
import Tile from "@/utils/Tile";
import Direction from "@/utils/Directions";

class World {
    size: number;
    grid: Cell[][];
    tiles: Tile[];

    constructor(size: number, tiles: Tile[]) {
        this.size = size;
        this.tiles = tiles;
        this.grid = [];
        for (let i = 0; i < size; i++) {
            this.grid[i] = [];
            for (let j = 0; j < size; j++) {
                this.grid[i][j] = new Cell(i,j, tiles);
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
                    let newPossibleTiles: Tile[] = []
                    for (let tile of cell.possibleTiles){
                        let possibleTiles: Tile[] = []
                        for (let t of neighborCell.possibleTiles){
                            if (tile.matchToOther(t,direction) && !newPossibleTiles.includes(t)){
                                possibleTiles.push(tile);
                            }
                        }
                        newPossibleTiles.push(...possibleTiles)
                    }
                    if(neighborCell.possibleTiles.length != newPossibleTiles.length){
                        neighborCell.possibleTiles = newPossibleTiles;
                        this.updateEntropies(neighborCell)
                    }
                }
            }
        }
    }

    getMinEtropyCells(): Cell[]{
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