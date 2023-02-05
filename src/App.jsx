import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  const proxy = "http://localhost:8081/ping";
  const [data, setData] = useState("");

  const fetchData = async () => {
    const response = await fetch(proxy);
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
