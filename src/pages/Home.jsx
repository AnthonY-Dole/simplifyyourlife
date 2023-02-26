import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import.meta.env.VITE_API_URL;
const Home = () => {
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
    <>
      <Hero />
      <h1>{data.pong}</h1>
      <SimpleGrid minChildWidth="250px" spacing="40px">
        <Box>
          <Card title="Link Shortener" />
        </Box>
        <Box>
          <Card title="QR Code generator" />
        </Box>
        <Box>
          <Card title="Youtube converter" />
        </Box>
        <Box>
          <Card title="password Strength Checker" />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Home;
