import { FC, useState } from "react";
import { Divider, Heading, VStack, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import gamesData from "./../../data/data.json";
import providers from "./../../data/provider.json";
import Gallery from "../../components/Gallery/Gallery";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectProvider from "../../components/Filters/SelectProvider";

const Index: FC = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  return (
    <Box textAlign={"center"} padding={"10px"} paddingTop={"20px"}>
      <Heading as="h1" size="2xl" color={"#eee"}>
        Game Gallery
      </Heading>
      <Divider
        w={"200px"}
        margin={"auto"}
        marginTop={"7px"}
        marginBottom={"30px"}
      />
      <Box
        width={{ base: "60%", md: "50%", lg: "40%", xl: "30%" }}
        margin={"auto"}
      >
        <VStack>
          <SearchBar
            searchedValue={searchedValue}
            setSearchedValue={setSearchedValue}
          />
          <Divider width={"80%"} margin={"auto"} />
          <Text fontSize={"12px"}>Filters</Text>
          <SelectProvider
            providers={providers}
            selectedProvider={selectedProvider}
            setSelectedProvider={setSelectedProvider}
          />
        </VStack>
      </Box>
      <Box
        width={{ xl: "80%" }}
        display={"flex"}
        justifyContent={"center"}
        margin={"auto"}
      >
        <Gallery
          gamesData={gamesData}
          searchedValue={searchedValue}
          selectedProvider={selectedProvider}
        />
      </Box>
    </Box>
  );
};

export default Index;
