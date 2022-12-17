import { useState } from "react";
import FinishScreen from "./components/FinishScreen";
import GameScreen from "./components/GameScreen";
import MainScreen from "./components/MainScreen";

function App() {
  // variables de estado
  const [level, setlevel] = useState(0)

  // cambiar la dificultad
  const changeDifficulty = () => {
    setlevel(level === 2 ? 0 : level + 1)
  }

  // iniciar el juego
  

  return (
    <div>
     <MainScreen level={level} changeDifficulty={changeDifficulty}/>
     <GameScreen/>
     <FinishScreen/>
    </div>
  );
}

export default App;
