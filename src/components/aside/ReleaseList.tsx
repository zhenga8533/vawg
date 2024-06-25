import { Heading, List, ListItem } from "@chakra-ui/react";
import { FaCalendar, FaFastForward, FaStar } from "react-icons/fa";
import IconButton from "../general/IconButton";
import { SiFireship } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const ReleaseList = () => {
  const navigate = useNavigate();

  return (
    <>
      <Heading className="list-heading" fontSize="3xl">
        Releases
      </Heading>
      <List>
        <ListItem paddingY={1}>
          <IconButton description="Last month" icon={FaStar} onClick={() => navigate("/games/last-month")} />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton description="This week" icon={SiFireship} onClick={() => navigate("/games/this-week")} />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton description="Next week" icon={FaFastForward} onClick={() => navigate("/games/next-week")} />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton description="Release calendar" icon={FaCalendar} onClick={() => navigate("/release-calendar")} />
        </ListItem>
      </List>
    </>
  );
};

export default ReleaseList;
