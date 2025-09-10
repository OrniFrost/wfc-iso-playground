import Direction from "@/utils/Directions";
import Directions from "@/utils/Directions";


class Tile {
    id: number;
    edges: Map<Direction, string>;
    weight: number;

    constructor(id: number) {
        this.id = id;
        this.edges = new Map();
        this.weight = 1;
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