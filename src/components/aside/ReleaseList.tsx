import { Heading, List, ListItem } from "@chakra-ui/react";
import { FaCalendar, FaFastForward, FaStar } from "react-icons/fa";
import { SiFireship } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import IconButton from "../general/IconButton";

const ReleaseList = () => {
  const releases = [
    { description: "Last month", icon: FaStar, slug: "last-month" },
    { description: "This week", icon: SiFireship, slug: "this-week" },
    { description: "Next week", icon: FaFastForward, slug: "next-week" },
    { description: "Release calendar", icon: FaCalendar, slug: "release-calendar" },
  ];
  const navigate = useNavigate();

  return (
    <>
      <Heading className="list-heading" fontSize="3xl">
        Releases
      </Heading>
      <List>
        {releases.map((release, index) => (
          <ListItem key={index} paddingY={1}>
            <IconButton
              description={release.description}
              highlight={window.location.pathname.includes(release.slug)}
              icon={release.icon}
              onClick={() => navigate(`/games/${release.slug}`)}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ReleaseList;
