import { Heading, List, ListItem } from "@chakra-ui/react";
import { FaCrown, FaTrophy } from "react-icons/fa";
import IconButton from "../general/IconButton";
import { MdLeaderboard } from "react-icons/md";

const TopList = () => {
  const lastYear = new Date().getFullYear() - 1;

  return (
    <>
      <Heading className="list-heading" fontSize="3xl" marginTop={0}>
        Top
      </Heading>
      <List>
        <ListItem paddingY={1}>
          <IconButton description="Best of the year" icon={FaTrophy} />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton
            description={`Popular in ${lastYear}`}
            icon={MdLeaderboard}
          />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton description="All time top 250" icon={FaCrown} />
        </ListItem>
      </List>
    </>
  );
};

export default TopList;
