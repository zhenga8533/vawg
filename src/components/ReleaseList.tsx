import { Heading, List, ListItem } from "@chakra-ui/react";
import { FaCalendar, FaFastForward, FaStar } from "react-icons/fa";
import IconButton from "./IconButton";
import { SiFireship } from "react-icons/si";

const ReleaseList = () => {
  return (
    <>
      <Heading className="list-heading" fontSize="3xl">
        Releases
      </Heading>
      <List>
        <ListItem paddingY={1}>
          <IconButton description="Last 30 days" icon={FaStar} />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton description="This week" icon={SiFireship} />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton description="Next week" icon={FaFastForward} />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton description="Release calendar" icon={FaCalendar} />
        </ListItem>
      </List>
    </>
  );
};

export default ReleaseList;
