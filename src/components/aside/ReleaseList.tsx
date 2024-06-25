import { Heading, List, ListItem } from "@chakra-ui/react";
import { FaCalendar, FaFastForward, FaStar } from "react-icons/fa";
import IconButton from "../general/IconButton";
import { SiFireship } from "react-icons/si";
import { useNavigate } from "react-router-dom";

interface ReleaseListProps {
  onSelectRelease: (dates: string) => void;
}

const ReleaseList = ({ onSelectRelease }: ReleaseListProps) => {
  const navigate = useNavigate();
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  return (
    <>
      <Heading className="list-heading" fontSize="3xl">
        Releases
      </Heading>
      <List>
        <ListItem paddingY={1}>
          <IconButton
            description="Last month"
            icon={FaStar}
            onClick={() => {
              date.setMonth(date.getMonth() - 1);
              const lastMonth = date.toISOString().slice(0, 10);
              navigate("/games/last-month");
              onSelectRelease(`${lastMonth},${today}`);
            }}
          />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton
            description="This week"
            icon={SiFireship}
            onClick={() => {
              date.setDate(date.getDate() - 7);
              const lastWeek = date.toISOString().slice(0, 10);
              console.log(lastWeek);
              navigate("/games/this-week");
              onSelectRelease(`${lastWeek},${today}`);
            }}
          />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton
            description="Next week"
            icon={FaFastForward}
            onClick={() => {
              date.setDate(date.getDate() + 7);
              const nextWeek = date.toISOString().slice(0, 10);
              navigate("/games/next-week");
              onSelectRelease(`${today},${nextWeek}`);
            }}
          />
        </ListItem>
        <ListItem paddingY={1}>
          <IconButton description="Release calendar" icon={FaCalendar} onClick={() => navigate("/release-calendar")} />
        </ListItem>
      </List>
    </>
  );
};

export default ReleaseList;
