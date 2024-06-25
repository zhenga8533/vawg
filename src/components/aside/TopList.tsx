import { Heading, List, ListItem } from "@chakra-ui/react";
import { FaCrown, FaTrophy } from "react-icons/fa";
import IconButton from "../general/IconButton";
import { MdLeaderboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TopList = () => {
  const navigate = useNavigate();

  return (
    <>
      <Heading className="list-heading" fontSize="3xl" marginTop={0}>
        Top
      </Heading>
      <List>
        <ListItem paddingY={1}>
          <IconButton
            description="Best of the year"
            icon={FaTrophy}
            onClick={() => navigate("/games/best-of-the-year")}
          />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton
            description={`Popular last year`}
            icon={MdLeaderboard}
            onClick={() => navigate("/games/popular-last-year")}
          />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton description="All time" icon={FaCrown} onClick={() => navigate("/games/all-time")} />
        </ListItem>
      </List>
    </>
  );
};

export default TopList;
