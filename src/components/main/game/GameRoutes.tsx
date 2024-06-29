import { Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { formatSlug } from "../../../services/formatting";
import getStyle from "../../../services/select-style";

const GameRoutes = () => {
  const navigate = useNavigate();
  const slug = location.pathname.split("/")[2];
  const current = location.pathname.split("/")[3];

  const routes = [
    "",
    "media",
    "games-like",
    "collections",
    "achievements",
    "posts",
    "streams",
    "videos",
    "development-team",
    "reviews",
    "comments",
  ].map((route, index) => (
    <Button
      {...getStyle(route, current)}
      key={index}
      onClick={() => navigate(`/games/${slug}/${route}`.replace(/\/+$/, ""))}
      variant="link"
    >
      {formatSlug(route || "About")}
    </Button>
  ));

  return (
    <VStack align="start" spacing={4}>
      {routes}
    </VStack>
  );
};

export default GameRoutes;
