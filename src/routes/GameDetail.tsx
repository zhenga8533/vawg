import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { slug } = useParams();

  return <div>Game Detail for: {slug}</div>;
};

export default GameDetail;
