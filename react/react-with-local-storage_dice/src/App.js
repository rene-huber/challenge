import { D6Button } from "./components/D6Button";
import History from "./components/History";
import  useLocalStorageState from "use-local-storage-state";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", [])  
  
  const handleRoll = () => {
    const newRoll = Math.floor(Math.random() * 6) +1;
    setRolls((prevRolls) => (prevRolls ? [...prevRolls, newRoll] : [newRoll]))
  };

  const value = rolls && rolls.length > 0 ? rolls[rolls.length - 1] : null;


  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={value} onRoll={handleRoll}/>
      </main>
      <aside className="app__aside">
        <History rolls={rolls || [] } />
      </aside>
    </div>
  );
}
