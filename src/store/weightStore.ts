import { reactive } from 'vue';

export interface WeightItem {
  name: string;
  concernedTiles: string[];
  weight: number;
}

export const weightStore = reactive({
  weights: [
    { id: 1, name: 'Grass', weight: 1 },
    { id: 2, name: 'Single path', weight: 1 },
    { id: 3, name: 'Bend path', weight: 1 },
    { id: 4, name: 'T-shape path', weight: 1 },
    { id: 5, name: '4-way path', weight: 1 },
    { id: 6, name: 'River', weight: 1 },
    { id: 7, name: 'Bend river', weight: 1 },
    { id: 8, name: 'Bridge river', weight: 1 },
    { id: 9, name: 'Field', weight: 1 },
    { id: 10, name: 'Field border', weight: 1 },
    { id: 11, name: 'Cliff', weight: 1 },
    { id: 12, name: 'Cliff ends', weight: 1 },
    { id: 13, name: 'Cliff bridge', weight: 1 },
    { id: 14, name: 'Waterfall', weight: 1 },
  ]
});