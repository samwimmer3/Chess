import { useState } from "react";
import type { Board } from "../../../common/types";

const initialBoard: Board = [
  ['r','n','b','q','k','b','n','r'],
  ['p','p','p','p','p','p','p','p'],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  ['P','P','P','P','P','P','P','P'],
  ['R','N','B','Q','K','B','N','R'],
];


export default function ChessBoard() {

  const [board, setBoard] = useState<Board>(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState<{ row: number, col: number } | null>(null);

  const handleClick = (row: number, col: number) => {
    
    if (selectedSquare) {
      // Move piece logic here
      setSelectedSquare(null);
      console.log(`Clicked square at row ${row}, col ${col} with piece ${board[row][col]}`);
    
    }
    else //means there isn't a piece there
    {
      setSelectedSquare({ row, col });
    }
  }

  return (
    <div className="grid grid-cols-8 w-[30.2rem] h-[30.2rem] border">
      {board.map((row, rowIdx) =>
        row.map((square, colIdx) => {
          const isDark = (rowIdx + colIdx) % 2 === 1;
          const isUpper =  square?.toUpperCase() === square;
          const bg = isDark ? 'bg-zinc-600' : 'bg-zinc-400';
          const letColor = isUpper ? 'text-white' : 'text-black';
          return (
            <div
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleClick(rowIdx, colIdx)}
              className={`flex items-center justify-center h-15 w-15 text-xl ${bg} ${letColor}`}
            >
              {square ?? ''}
            </div>
          );
        })
      )}
    </div>
  );
}