export default function Game() {
  return (
    <div className="game-container flex flex-col items-center justify-center h-screen bg-zinc-700">
      <h1>Opponent info</h1>
      <div className="flex flex-col bg-gray-800 w-150 h-100  p-4 rounded-lg shadow-lg items-center justify-between  max-w-2xl">
        
           <p>Chessboard</p> 
        <div className="flex flex-row justify-between w-50">
        <p>Timer</p>
        <p>Score?</p>
        </div>
      </div>
      <p>Player info</p>
    </div>
  );
}