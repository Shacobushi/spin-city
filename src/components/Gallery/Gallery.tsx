import { FC, useState, useEffect, useRef } from "react";
import GameCard from "../GameCard/GameCard";
import GameData from "../../types/GameData";
import { SimpleGrid } from "@chakra-ui/react";

interface GalleryProps {
  gamesData: GameData[];
  searchedValue: string;
  selectedProvider: string | undefined;
}

const Gallery: FC<GalleryProps> = ({
  gamesData,
  searchedValue,
  selectedProvider,
}) => {
  const [games, setGames] = useState<GameData[]>([]);
  const simpleGridRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let filteredGames = gamesData;
    if (selectedProvider) {
      filteredGames = filteredGames.filter((game) =>
        game.provider_title
          .toLowerCase()
          .includes(selectedProvider.toLowerCase()),
      );
    }
    if (searchedValue) {
      filteredGames = filteredGames.filter((game) =>
        game.name.toLowerCase().includes(searchedValue.toLowerCase()),
      );
    }
    setGames(filteredGames);
  }, [gamesData, searchedValue, selectedProvider]);
  useEffect(() => {
    if (games.length > 6 && selectedProvider) {
      if (simpleGridRef.current) {
        simpleGridRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }, [games, selectedProvider]);
  return (
    <SimpleGrid
      ref={simpleGridRef}
      marginTop={"30px"}
      padding={"2rem"}
      columns={{ sm: 2, md: 3 }}
      gap={5}
      height={"70vh"}
      overflowY={"auto"}
      style={{ scrollBehavior: "smooth" }}
    >
      {games.map((game: GameData) => (
        <GameCard gameData={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
};

export default Gallery;
