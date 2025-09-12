import Direction from "@/utils/Directions";
import { weightStore } from "@/store/weightStore";



class Tile {
    id: number;
    edges: Map<Direction, string>;
    weightCatId: number

    constructor(id: number, weightCatId: number) {
        this.id = id;
        this.edges = new Map();
        this.weightCatId = weightCatId;
    }

    getWeight(): number {
        const weightCategory = weightStore.weights.find(w => w.id == this.weightCatId)
        return  weightCategory ? weightCategory.weight : 1;
    }

    matchToOther(other: Tile, direction: Direction): boolean {
        switch (direction) {
            case Direction.North:
                // console.log(this.edges.get(Direction.North) +" <> "+this.reverseString(other.edges.get(Direction.South) ?? ""))
                return this.edges.get(Direction.North) === this.reverseString(other.edges.get(Direction.South) ?? "");
            case Direction.East:
                return this.edges.get(Direction.East) === this.reverseString(other.edges.get(Direction.West) ?? "");
            case Direction.South:
                return this.edges.get(Direction.South) === this.reverseString(other.edges.get(Direction.North) ?? "");
            case Direction.West:
                return this.edges.get(Direction.West) === this.reverseString(other.edges.get(Direction.East) ?? "");
            default:
                return false;
        }
    }

    private reverseString(str: string): string {
        return str.split("").reverse().join("");
    }

    toString(): string{
        return `id ${this.id}`
    }
}

export default Tile;