import World from './World'


class WorldGenerator {

    world: World;
    size: number;

    constructor(size: number) {
        this.world = new World(size);
        this.size = size;
    }

    randomizeWorld(nbTile: number){
        for(let i=0; i<this.size; i++){
            for(let j=0; j<this.size; j++){
                this.world.grid[i][j] = this.getRandomInt(nbTile)
            }
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}

export default WorldGenerator;