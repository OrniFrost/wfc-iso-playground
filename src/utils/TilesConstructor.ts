import Tile from "@/utils/Tile";
import tilesInfos from "@/utils/TilesInfos";

class TilesConstructor {

    tiles: Tile[]

    constructor() {
        this.tiles = []

        for (let tileInfo of tilesInfos) {
            const tile = new Tile(tileInfo.id, tileInfo.weightCatId)

            for (let edge of tileInfo.edges){
                tile.edges.set(edge.face, edge.value)
            }

            this.tiles.push(tile)
        }
    }
}

export default TilesConstructor