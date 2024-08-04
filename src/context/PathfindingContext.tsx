import { ReactNode, createContext, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utlis/types";
import { createGrid } from "../utlis/helpers";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utlis/constants";

interface PathfindingContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algrithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);

export const PathfindingProvider = ({children}: {children: ReactNode}) => {
    const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
    const [maze, setMaze] = useState<MazeType>("NONE");
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGURATION,END_TILE_CONFIGURATION));
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

    return (
        <PathfindingContext.Provider
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,
                isGraphVisualized,
                setIsGraphVisualized,
            }}
        >{children}</PathfindingContext.Provider>
    )
}