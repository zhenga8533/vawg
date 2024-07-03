import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Item } from "./useData";

interface Browse extends Item {
  description: string;
}

const useBrowse = (endpoint: string, slug: string) => {
  const [data, setData] = useState<Browse>({} as Browse);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  if (slug) {
    useEffect(() => {
      apiClient
        .get<Browse>(`${endpoint}/${slug}`)
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

export default useBrowse;
