import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Screenshot {
  id: number;
  image: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  rating_top: number;
  short_screenshots: Screenshot[];
}

export interface GameData {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacrictic: number;
  metacritic_platforms: {
    metascore: number;
    url: string;
  };
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: {
    id: number;
    title: string;
    count: number;
    percent: number;
  }[];
  reactons: {
    reactions: number;
    title: string;
  }[];
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  platforms: { platform: Platform }[];
  parent_platforms: { platform: Platform }[];
}

const useGame = (slug: string | undefined) => {
  const [data, setData] = useState({} as GameData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    apiClient
      .get<GameData>(`/games/${slug}`)
      .then((res) => {
        setData(res.data);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  });

  return { data, error, loading };
};

export default useGame;
