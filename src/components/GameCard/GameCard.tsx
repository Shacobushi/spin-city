import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import GameData from "../../types/GameData";
import DefaultPlaceholder from "../../assets/default-placeholder.png";

interface GameCardProps {
  gameData: GameData;
}

const GameCard: FC<GameCardProps> = ({ gameData }) => {
  const providerName =
    gameData.provider_title.charAt(0) +
    gameData.provider_title.slice(1).toLowerCase();
  return (
    <Card maxW="sm" height={"100%"} backgroundColor={"#e9eef1"} minW={"255px"}>
      <CardHeader>{gameData.name}</CardHeader>
      <CardBody>
        <Image
          src={gameData.background}
          fallbackSrc={DefaultPlaceholder}
          alt={gameData.name}
          w={"100%"}
          maxH={"123px"}
          borderRadius="lg"
        />
      </CardBody>
      <CardFooter>
        <VStack width={"100%"}>
          <Divider width={"80%"} borderColor={"#0a103a"} />
          <Text fontSize={"12px"} color={"#0a103a"}>
            {providerName}
          </Text>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
