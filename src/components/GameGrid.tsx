import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosResponse } from "axios";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => {
        setError("");
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
