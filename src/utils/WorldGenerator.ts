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
                this.world.grid[i][j] = this.getRandomIntInclusive(1, nbTile-1)
            }
        }
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default WorldGenerator;