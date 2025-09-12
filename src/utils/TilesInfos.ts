import Direction from "./Directions";


/*
A: Grass
B: Path
C: River
D: Harvest
E: Cliff
F: Bridge

 */
const tilesInfos = [
    {
        id: 0,
        weightCatId : 1,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 1,
        weightCatId : 2,
        edges : [
            {
                face: Direction.North,
                value: "ABA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "ABA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 2,
        weightCatId : 2,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "ABA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "ABA"
            }
        ]
    },
    {
        id: 3,
        weightCatId : 3,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "ABA"
            },
            {
                face: Direction.South,
                value: "ABA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 4,
        weightCatId : 3,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "ABA"
            },
            {
                face: Direction.West,
                value: "ABA"
            }
        ]
    },
    {
        id: 5,
        weightCatId : 3,
        edges : [
            {
                face: Direction.North,
                value: "ABA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "ABA"
            }
        ]
    },
    {
        id: 6,
        weightCatId : 3,
        edges : [
            {
                face: Direction.North,
                value: "ABA"
            },
            {
                face: Direction.East,
                value: "ABA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 7,
        weightCatId : 4,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "ABA"
            },
            {
                face: Direction.South,
                value: "ABA"
            },
            {
                face: Direction.West,
                value: "ABA"
            }
        ]
    },
    {
        id: 8,
        weightCatId : 4,
        edges : [
            {
                face: Direction.North,
                value: "ABA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "ABA"
            },
            {
                face: Direction.West,
                value: "ABA"
            }
        ]
    },
    {
        id: 9,
        weightCatId : 4,
        edges : [
            {
                face: Direction.North,
                value: "ABA"
            },
            {
                face: Direction.East,
                value: "ABA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "ABA"
            }
        ]
    },
    {
        id: 10,
        weightCatId : 4,
        edges : [
            {
                face: Direction.North,
                value: "ABA"
            },
            {
                face: Direction.East,
                value: "ABA"
            },
            {
                face: Direction.South,
                value: "ABA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 11,
        weightCatId : 5,
        edges : [
            {
                face: Direction.North,
                value: "ABA"
            },
            {
                face: Direction.East,
                value: "ABA"
            },
            {
                face: Direction.South,
                value: "ABA"
            },
            {
                face: Direction.West,
                value: "ABA"
            }
        ]
    },
    {
        id: 12,
        weightCatId : 6,
        edges : [
            {
                face: Direction.North,
                value: "ACA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "ACA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 13,
        weightCatId : 6,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "ACA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "ACA"
            }
        ]
    },
    {
        id: 14,
        weightCatId : 7,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "ACA"
            },
            {
                face: Direction.South,
                value: "ACA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 15,
        weightCatId : 7,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "ACA"
            },
            {
                face: Direction.West,
                value: "ACA"
            }
        ]
    },
    {
        id: 16,
        weightCatId : 7,
        edges : [
            {
                face: Direction.North,
                value: "ACA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "ACA"
            }
        ]
    },
    {
        id: 17,
        weightCatId : 7,
        edges : [
            {
                face: Direction.North,
                value: "ACA"
            },
            {
                face: Direction.East,
                value: "ACA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 18,
        weightCatId : 8,
        edges : [
            {
                face: Direction.North,
                value: "ACA"
            },
            {
                face: Direction.East,
                value: "ABA"
            },
            {
                face: Direction.South,
                value: "ACA"
            },
            {
                face: Direction.West,
                value: "ABA"
            }
        ]
    },
    {
        id: 19,
        weightCatId : 8,
        edges : [
            {
                face: Direction.North,
                value: "ABA"
            },
            {
                face: Direction.East,
                value: "ACA"
            },
            {
                face: Direction.South,
                value: "ABA"
            },
            {
                face: Direction.West,
                value: "ACA"
            }
        ]
    },
    //Harvest
    {
        id: 20,
        weightCatId : 9,
        edges : [
            {
                face: Direction.North,
                value: "DDD"
            },
            {
                face: Direction.East,
                value: "DDD"
            },
            {
                face: Direction.South,
                value: "DDD"
            },
            {
                face: Direction.West,
                value: "DDD"
            }
        ]
    },
    {
        id: 21,
        weightCatId : 10,
        edges : [
            {
                face: Direction.North,
                value: "AAD"
            },
            {
                face: Direction.East,
                value: "DDD"
            },
            {
                face: Direction.South,
                value: "DAA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 22,
        weightCatId : 10,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "AAD"
            },
            {
                face: Direction.South,
                value: "DDD"
            },
            {
                face: Direction.West,
                value: "DAA"
            }
        ]
    },
    {
        id: 23,
        weightCatId : 10,
        edges : [
            {
                face: Direction.North,
                value: "DAA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "AAD"
            },
            {
                face: Direction.West,
                value: "DDD"
            }
        ]
    },
    {
        id: 24,
        weightCatId : 10,
        edges : [
            {
                face: Direction.North,
                value: "DDD"
            },
            {
                face: Direction.East,
                value: "DAA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "AAD"
            }
        ]
    },
    {
        id: 25,
        weightCatId : 10,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "AAD"
            },
            {
                face: Direction.South,
                value: "DAA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 26,
        weightCatId : 10,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "AAD"
            },
            {
                face: Direction.West,
                value: "DAA"
            }
        ]
    },
    {
        id: 27,
        weightCatId : 10,
        edges : [
            {
                face: Direction.North,
                value: "DAA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "AAD"
            }
        ]
    },
    {
        id: 28,
        weightCatId : 10,
        edges : [
            {
                face: Direction.North,
                value: "AAD"
            },
            {
                face: Direction.East,
                value: "DAA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 29,
        weightCatId : 10,
        edges : [
            {
                face: Direction.North,
                value: "DDD"
            },
            {
                face: Direction.East,
                value: "DAA"
            },
            {
                face: Direction.South,
                value: "AAD"
            },
            {
                face: Direction.West,
                value: "DDD"
            }
        ]
    },
    //Cliff
    {
        id: 30,
        weightCatId : 11,
        edges : [
            {
                face: Direction.North,
                value: "AEE"
            },
            {
                face: Direction.East,
                value: "EEE"
            },
            {
                face: Direction.South,
                value: "EEA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 31,
        weightCatId : 11,
        edges : [
            {
                face: Direction.North,
                value: "EEA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "AEE"
            },
            {
                face: Direction.West,
                value: "EEE"
            }
        ]
    },
    {
        id: 32,
        weightCatId : 12,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "AEE"
            },
            {
                face: Direction.South,
                value: "EEA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 33,
        weightCatId : 12,
        edges : [
            {
                face: Direction.North,
                value: "AAA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "AEE"
            },
            {
                face: Direction.West,
                value: "EEA"
            }
        ]
    },
    {
        id: 34,
        weightCatId : 12,
        edges : [
            {
                face: Direction.North,
                value: "AEE"
            },
            {
                face: Direction.East,
                value: "EEA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "AAA"
            }
        ]
    },
    {
        id: 35,
        weightCatId : 12,
        edges : [
            {
                face: Direction.North,
                value: "EEA"
            },
            {
                face: Direction.East,
                value: "AAA"
            },
            {
                face: Direction.South,
                value: "AAA"
            },
            {
                face: Direction.West,
                value: "AEE"
            }
        ]
    },
    {
        id: 36,
        weightCatId : 13,
        edges : [
            {
                face: Direction.North,
                value: "AEE"
            },
            {
                face: Direction.East,
                value: "EFE"
            },
            {
                face: Direction.South,
                value: "EEA"
            },
            {
                face: Direction.West,
                value: "ABA"
            }
        ]
    },
    {
        id: 37,
        weightCatId : 13,
        edges : [
            {
                face: Direction.North,
                value: "EEA"
            },
            {
                face: Direction.East,
                value: "ABA"
            },
            {
                face: Direction.South,
                value: "AEE"
            },
            {
                face: Direction.West,
                value: "EFE"
            }
        ]
    },
    {
        id: 38,
        weightCatId : 14,
        edges : [
            {
                face: Direction.North,
                value: "AEE"
            },
            {
                face: Direction.East,
                value: "EEE"
            },
            {
                face: Direction.South,
                value: "EEA"
            },
            {
                face: Direction.West,
                value: "ACA"
            }
        ]
    },
    {
        id: 39,
        weightCatId : 14,
        edges : [
            {
                face: Direction.North,
                value: "EEA"
            },
            {
                face: Direction.East,
                value: "ACA"
            },
            {
                face: Direction.South,
                value: "AEE"
            },
            {
                face: Direction.West,
                value: "EEE"
            }
        ]
    },
]

export default tilesInfos