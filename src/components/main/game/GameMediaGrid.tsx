import { Box, Grid, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Screenshot, Trailer } from "../../../hooks/useGame";

interface GameMediaGridProps {
  screenshots: Screenshot[];
  trailers: Trailer[];
}

const GameMediaGrid = ({ screenshots, trailers }: GameMediaGridProps) => {
  const [hovered, setHovered] = useState(false);
  const navgiate = useNavigate();

  const images = screenshots.slice(0, 6).map((screenshot, index, array) => {
    const isLast = index === array.length - 1;
    return (
      <Box key={screenshot.id} position="relative" width="100%">
        <Image src={screenshot.image} alt={screenshot.id.toString()} width="100%" />
        {isLast && (
          <VStack
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            alignItems="center"
            backgroundColor={`rgba(0, 0, 0, ${hovered ? 0.9 : 0.75})`}
            cursor="pointer"
            color={hovered ? "white" : "gray"}
            justifyContent="center"
            onClick={() => navgiate("media")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Text>...</Text>
            <Text>view all</Text>
          </VStack>
        )}
      </Box>
    );
  });

  return (
    <>
      {trailers && trailers.length > 0 && (
        <video controls width="100%" autoPlay muted>
          <source src={trailers[0].data["480"]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {screenshots.length > 0 && (
        <Grid gap={4} marginTop={5} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
          {images}
        </Grid>
      )}
    </>
  );
};

export default GameMediaGrid;
