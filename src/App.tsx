import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { ToDo } from "./components/To-do";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <ToDo />
    </div>
  );
}

export default App;
