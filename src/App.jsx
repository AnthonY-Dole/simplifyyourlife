import { useState } from "react";

import "./App.css";
import { useEffect } from "react";
import.meta.env.VITE_API_URL;

function App() {
  const proxy = import.meta.env.VITE_API_URL;
  const [data, setData] = useState("");

  const fetchData = async () => {
    const response = await fetch(`${proxy}/api/ping`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{data.pong}</h1>
    </div>
  );
}

export default App;
