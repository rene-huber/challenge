import Card from "./components/Card";
import { fruits } from "./utils/fruits";

export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card name={fruit.name} color={fruit.color} key={fruit.id} />;
      })}
    </div>
  );
}
