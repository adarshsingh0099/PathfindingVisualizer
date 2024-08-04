import { GridType, SpeedType, TileType } from "../../../utlis/types";
import { horizontalDivision } from "./horizontalDivision";
import { verticalDivision } from "./verticalDivision";


// It is a recursive function
export default async function recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width,
    setIsDisabled,
    speed,
}:{
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
    row: number;
    col: number;
    height: number;
    width: number;
    setIsDisabled: (disabled: boolean) => void;
    speed: SpeedType;
}) {
    // Base Case
    if(height <= 1 || width <= 1){
        return;
    }

    if (height > width) {
        await horizontalDivision({
          // Divide horizontally if height is greater than width
          grid,
          startTile,
          endTile,
          row,
          col,
          height,
          width,
          setIsDisabled,
          speed,
        });
    }

    else {
        await verticalDivision({
          // Divide vertically if width is greater than or equal to height
          grid,
          startTile,
          endTile,
          row,
          col,
          height,
          width,
          setIsDisabled,
          speed,
        });
    }
}