import { Heading, List, ListItem } from "@chakra-ui/react";
import { FaCrown, FaTrophy } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import IconButton from "../general/IconButton";

const TopList = () => {
  const tops = [
    { description: "Best of the year", icon: FaTrophy, slug: "best-of-the-year" },
    { description: "Popular last year", icon: MdLeaderboard, slug: "popular-last-year" },
    { description: "All time", icon: FaCrown, slug: "all-time" },
  ];
  const navigate = useNavigate();

  return (
    <>
      <Heading className="list-heading" fontSize="3xl" marginTop={0}>
        Top
      </Heading>
      <List>
        {tops.map((top, index) => (
          <ListItem key={index} paddingY={1}>
            <IconButton
              description={top.description}
              highlight={window.location.pathname.includes(top.slug)}
              icon={top.icon}
              onClick={() => navigate(`/games/${top.slug}`)}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TopList;
