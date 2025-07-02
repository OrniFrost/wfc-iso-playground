class World {
    size: number;
    grid: number[][];

    constructor(size: number) {
        this.size = size;
        this.grid = [];
        for (let i = 0; i < size; i++) {
            this.grid[i] = [];
            for (let j = 0; j < size; j++) {
                this.grid[i][j] = 0;
            }
        }
    }
}

export default World;