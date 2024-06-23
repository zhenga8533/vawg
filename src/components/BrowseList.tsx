import { Button, Heading, List, ListItem } from "@chakra-ui/react";
import {
  IoChatbubble,
  IoCloudUpload,
  IoCodeSlash,
  IoFolder,
  IoGameController,
  IoPerson,
} from "react-icons/io5";
import IconButton from "./IconButton";
import { IoMdDownload } from "react-icons/io";
import { FaGhost, FaHashtag } from "react-icons/fa";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const BrowseList = () => {
  const browses = [
    { description: "Platforms", icon: IoGameController },
    { description: "Stores", icon: IoMdDownload },
    { description: "Collections", icon: IoFolder },
    { description: "Reviews", icon: IoChatbubble },
    { description: "Genres", icon: FaGhost },
    { description: "Creators", icon: IoPerson },
    { description: "Tags", icon: FaHashtag },
    { description: "Developers", icon: IoCodeSlash },
    { description: "Publisher", icon: IoCloudUpload },
  ];
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Heading className="list-heading" fontSize="3xl">
        Browse
      </Heading>
      <List>
        {browses.slice(0, showAll ? browses.length : 3).map((browse) => (
          <ListItem paddingY={1}>
            <IconButton description={browse.description} icon={browse.icon} />
          </ListItem>
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

export default BrowseList;
