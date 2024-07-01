import { Button, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { capitalize } from "../../services/formatting";

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const locations = useLocation().pathname.split("/").slice(1);

  const slugToTitle = (slug: string) => {
    if (slug.toLowerCase() === "vawg") return "Home";
    return slug
      .split("-")
      .map((word) => capitalize(word))
      .join(" ");
  };

  return (
    <HStack>
      {locations.flatMap((location, index) => [
        <Button
          isDisabled={index === locations.length - 1}
          key={location}
          color="gray"
          onClick={() => navigate(locations.slice(0, index + 1).join("/"))}
          variant="link"
        >
          {slugToTitle(location)}
        </Button>,
        index < locations.length - 1 && <span key={`sep-${index}`}> / </span>,
      ])}
    </HStack>
  );
};

export default Breadcrumbs;
