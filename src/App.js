import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
  }, [count]);
  useEffect(() => {
    console.log("useffect 2");
  });
  useEffect(() => {
    console.log("useEffect 3");
  }, []);
  return (
    <div className="App">
      <h1>useEffect</h1>
      <h2>{count}</h2>
      <button onClick={() => setcount(count + 1)}>Incresce</button>
      <button onClick={() => setcount(count - 1)}>Decresce</button>
    </div>
  );
}

export default App;
