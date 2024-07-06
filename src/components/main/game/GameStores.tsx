import { Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import { FaAppStore, FaGooglePlay, FaPlaystation, FaSteam, FaXbox } from "react-icons/fa";
import { SiEpicgames, SiGogdotcom } from "react-icons/si";
import { TbSquareRoundedLetterNFilled } from "react-icons/tb";
import { GameData } from "../../../hooks/useGame";

interface GameStoresProps {
  stores: GameData["stores"];
}

const GameStores = ({ stores }: GameStoresProps) => {
  const storeIcons: { [key: string]: JSX.Element } = {
    "playstation-store": <FaPlaystation />,
    "xbox-store": <FaXbox />,
    xbox360: <FaXbox />,
    steam: <FaSteam />,
    "epic-games": <SiEpicgames />,
    gog: <SiGogdotcom />,
    nintendo: <TbSquareRoundedLetterNFilled />,
    "app-store": <FaAppStore />,
    "google-store": <FaGooglePlay />,
  };

  return (
    <>
      <Heading size="md" mt={5}>
        Where to buy
      </Heading>
      <Grid gap={4} mt={5} templateColumns={{ base: "1fr", sm: "repeat(auto-fill, minmax(150px, 1fr))" }}>
        {stores.map((store) => (
          <GridItem key={store.id}>
            <Button
              as="a"
              href={`https://${store.store.domain}`}
              rightIcon={storeIcons[store.store.slug]}
              target="_blank"
              width="100%"
            >
              {store.store.name}{" "}
            </Button>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default GameStores;
