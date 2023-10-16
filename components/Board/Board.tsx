"use client";

import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";

const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return <h1>Hello</h1>;
};

export default Board;
