import { Button, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const locations = useLocation().pathname.split("/");

  const slugToTitle = (slug: string) => {
    if (slug === "") return "Home";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <HStack>
      {locations.flatMap((location, index) => [
        <Button
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
