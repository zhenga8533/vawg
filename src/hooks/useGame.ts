import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Info, Item } from "./useData";

export interface Screenshot {
  id: number;
  image: string;
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Info }[];
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
  metacritic: number;
  metacritic_platforms: {
    metascore: number;
    url: string;
    platform: {
      platform: number;
      name: string;
      slug: string;
    };
  }[];
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
  reactons: object;
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
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: { platform: Info }[];
  platforms: {
    platform: Info;
    released_at: string;
    requirements: {
      minimum: string;
      recommended: string;
    };
  }[];
  stores: {
    id: number;
    url: string;
    store: Item & {
      domain: string;
    };
  }[];
  developers: Item[];
  genres: Item[];
  tags: (Item & {
    language: string;
  })[];
  publishers: Item[];
  esrb_rating: Info;
  description_raw: string;
}

const useGame = (slug: string) => {
  const [data, setData] = useState({} as GameData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  if (slug) {
    useEffect(() => {
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
    }, []);
  }

  return { data, error, loading };
};

export default useGame;
