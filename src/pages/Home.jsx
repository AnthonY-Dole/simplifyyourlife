import React, { useEffect, useState } from "react";
const { VITE_API_URL } = import.meta.env;
const Home = () => {
  const proxy = VITE_API_URL;
  const [data, setData] = useState("");

  const fetchData = async () => {
    const response = await fetch(`${proxy}/api/ping`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <>{data.pong}</>;
};

export default Home;
