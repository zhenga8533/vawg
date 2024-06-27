import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();
  const { data, error, loading } = useGame(slug);

  return <div>Game Detail for: {data.name}</div>;
};

export default GameDetail;
