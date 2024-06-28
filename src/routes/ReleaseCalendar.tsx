import ReleaseSelector from "../components/main/games/ReleaseSelector";
import Games, { GamesProps } from "./Games";

const ReleaseCalendar = ({ gameQuery, setGameQuery }: GamesProps) => {
  const onLoad = () => {
    const formatDate = (date: Date) => date.toISOString().split("T")[0];
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const dates = `${formatDate(firstDay)},${formatDate(lastDay)}`;
    setGameQuery({ ...gameQuery, dates: dates });
  };

  return (
    <>
      <ReleaseSelector onSelectDate={(dates: string) => setGameQuery({ ...gameQuery, dates })} />
      <Games gameQuery={gameQuery} onLoad={onLoad} setGameQuery={setGameQuery} />
    </>
  );
};

export default ReleaseCalendar;
