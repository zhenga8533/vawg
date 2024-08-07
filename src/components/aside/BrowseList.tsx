import { Heading, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { FaGhost, FaHashtag } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCloudUpload, IoCodeSlash, IoGameController, IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import IconButton from "../general/IconButton";
import ShowButton from "../general/ShowButton";

const BrowseList = () => {
  const browses = [
    { description: "Platforms", icon: IoGameController, slug: "platforms" },
    { description: "Stores", icon: IoMdDownload, slug: "stores" },
    { description: "Genres", icon: FaGhost, slug: "genres" },
    { description: "Creators", icon: IoPerson, slug: "creators" },
    { description: "Tags", icon: FaHashtag, slug: "tags" },
    { description: "Developers", icon: IoCodeSlash, slug: "developers" },
    { description: "Publishers", icon: IoCloudUpload, slug: "publishers" },
  ];
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Heading className="list-heading" fontSize="3xl">
        Browse
      </Heading>
      <List>
        {browses.slice(0, showAll ? browses.length : 3).map((browse, index) => (
          <ListItem key={index} paddingY={1}>
            <IconButton
              description={browse.description}
              highlight={window.location.pathname.includes(browse.slug)}
              icon={browse.icon}
              onClick={() => navigate(`/${browse.slug}`)}
            />
          </ListItem>
        ))}
        {browses.length > 3 && (
          <ListItem mt={1}>
            <ShowButton showAll={showAll} setShowAll={setShowAll} />
          </ListItem>
        )}
      </List>
    </>
  );
};

export default BrowseList;
