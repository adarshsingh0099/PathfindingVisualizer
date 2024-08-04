import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

export const getUntraversedNeighbors = (grid: GridType, tile: TileType) => {
  const { row, col } = tile;
  const neighbors = [];

  // Get above tile
  if (row > 0) {
    neighbors.push(grid[row - 1][col]);
  }
  // Get below tile
  if (row < MAX_ROWS - 1) {
    neighbors.push(grid[row + 1][col]);
  }
 // Get left tile
  if (col > 0) {
    neighbors.push(grid[row][col - 1]);
  }
 // Get right tile
  if (col < MAX_COLS - 1) {
    neighbors.push(grid[row][col + 1]);
  }
  // Return untraversed neighbour
  return neighbors.filter((neighbor) => !neighbor.isTraversed);
};