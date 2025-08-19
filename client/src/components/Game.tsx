import ChessBoard from "./ChessBoard";

export default function Game() {
  return (
    <div className="game-container flex flex-col items-center justify-center h-screen mx-auto bg-zinc-700">
      <h1>Opponent info</h1>
      <div className="flex flex-col bg-gray-800 w-200 h-150  p-4 rounded-lg shadow-lg items-center justify-between  max-w-2xl">
        <p>Black Time</p>
        <div>
          {/* Placeholder for player's chess pieces component */}
          <ChessBoard />
          {/* Placeholder for opponent's chess pieces component */}
        </div>
        <p className="center">White Time</p>
      </div>
      <p>Player info</p>
    </div>
  );
}