import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Simplifie toi la vie <br />
          <Text as={"span"} color={"green.400"}>
            avec cette outil
          </Text>
        </Heading>
        <Text color={"gray.500"}>
          Tu en as marre de chercher de nombreuses heures sur le net à la
          recherche d'un site qui te convertit tes fichiers ou qui te permet de
          faire des choses cool ? Tu as trouvé la solution ! Simplifie ta vie
          avec cette outil !
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            Démarrer
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
