import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const ShortnerPage = () => {
  const [link, setLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  const createLink = () => {
    console.log(link);
    fetch("https://simplifyyourlife.vercel.app/api/urls/shortner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ longUrl: link }),
    })
      .then((res) => res.json())
      .then((data) => setShortLink(data.shortUrl));
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Ajouter votre lien à rétrécir
        </Heading>

        <FormControl id="name">
          <Input
            placeholder="https://example.com"
            _placeholder={{ color: "gray.500" }}
            type="name"
            onChange={(e) => setLink(e.target.value)}
          />
        </FormControl>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          {shortLink}
        </Text>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={createLink}
          >
            Lancer
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ShortnerPage;
