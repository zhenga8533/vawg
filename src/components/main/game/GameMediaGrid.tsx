import {
  Box,
  Grid,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Screenshot, Trailer } from "../../../hooks/useGame";

interface GameMediaGridProps {
  screenshots: Screenshot[];
  trailers: Trailer[];
}

const GameMediaGrid = ({ screenshots, trailers }: GameMediaGridProps) => {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const screenshotGrid: JSX.Element[] = [];

  const videos = trailers.slice(1, trailers.length).map((trailer) => (
    <video controls key={trailer.id} width="100%">
      <source src={trailer.data["480"]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ));
  const images = screenshots.slice(0, screenshots.length).map((screenshot, index) => {
    if (index < 4)
      screenshotGrid.push(
        <Box key={screenshot.id} position="relative" width="100%">
          <Image src={screenshot.image} alt={screenshot.id.toString()} width="100%" />
          {index === 3 && (
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
              onClick={() => {
                setModalOpen(true);
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Text>...</Text>
              <Text>view all</Text>
            </VStack>
          )}
        </Box>
      );

    return (
      <Box key={screenshot.id} position="relative" width="100%">
        <Image src={screenshot.image} alt={screenshot.id.toString()} width="100%" />
      </Box>
    );
  });
  const media = [...videos, ...images];

  return (
    <>
      {trailers && trailers.length > 0 && (
        <video controls width="100%" autoPlay muted>
          <source src={trailers[0].data["480"]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <Grid gap={4} marginTop={5} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
        {screenshotGrid}
      </Grid>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} size="4xl">
        <ModalContent>
          <ModalHeader>Media</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid gap={4} templateColumns={{ base: "1fr" }}>
              {media}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GameMediaGrid;
