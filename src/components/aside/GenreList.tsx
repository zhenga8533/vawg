import { Button, Heading, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import cropImageURL from "../../services/image-url";
import SkeletonListItem from "../general/SkeletonListItem";
import anyGenre from "../../assets/any-genre.webp";
import GenreItem from "./GenreItem";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface GenreListProps {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, loading } = useGenres();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const skeletons = Array.from({ length: 3 }, (_, i) => <SkeletonListItem key={i} />);

  return (
    <>
      <Heading className="list-heading" fontSize="3xl">
        Genres
      </Heading>
      <List>
        {loading && skeletons}
        {!loading && (
          <GenreItem
            genre={null}
            image={anyGenre}
            key={0}
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
          />
        )}
        {data.slice(0, showAll ? data.length : 2).map((genre) => (
          <GenreItem
            genre={genre}
            image={cropImageURL(genre.image_background)}
            key={genre.id}
            onSelectGenre={() => {
              navigate("/games");
              onSelectGenre(genre);
            }}
            selectedGenre={selectedGenre}
          />
        ))}
        <ListItem marginTop={1}>
          <Button
            color="gray"
            leftIcon={showAll ? <BsChevronUp /> : <BsChevronDown />}
            onClick={() => setShowAll(!showAll)}
            padding={0}
            variant="link"
          >
            {showAll ? "Hide" : "Show all"}
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default GenreList;
