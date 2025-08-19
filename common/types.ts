 export type Piece = 
    | 'r' | 'n' | 'b' | 'q' | 'k' | 'p' // black pieces
    | 'R' | 'N' | 'B' | 'Q' | 'K' | 'P'; // white pieces

export type Square = Piece | null;
export type Board = Square[][];