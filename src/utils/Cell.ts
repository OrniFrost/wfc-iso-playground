import Tile from "@/utils/Tile";
import Direction from "@/utils/Directions";
import {randomChoice} from "@/utils/Utils";

class Cell{
    pos: [number, number];
    isCollapsed: boolean;
    possibleTiles: Tile[];
    neighbors: Map<Direction, Cell>;

    constructor(x: number, y: number, possibleTiles: Tile[]) {
        this.pos = [x, y];
        this.isCollapsed = false;
        this.possibleTiles = possibleTiles;
        this.neighbors = new Map();
    }

    getEntropy(): number {
        return this.possibleTiles.length;
    }

    collapseWithRandomTile() : void{
        this.isCollapsed = true;
        const randomTile: Tile = randomChoice(this.possibleTiles)
        this.possibleTiles = [randomTile]
    }

    collapseWithRandomTileWeighted(): void {
        this.isCollapsed = true;
        const tiles: Tile[] = [];
        for (const tile of this.possibleTiles) {
            let arr: Tile[] = [];
            for (let i = 0; i < tile.getWeight(); i++) {
                arr.push(tile);
            }

            tiles.push(...arr);
        }
        const randomTile = randomChoice(tiles);
        this.possibleTiles = [randomTile];
    }

    toString(): string {
        return `Cell ${this.pos}, isCollapsed: ${this.isCollapsed}`
    }

}

export default Cell;