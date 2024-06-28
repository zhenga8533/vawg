import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface Data {
  count: number;
  error: string;
  loading: boolean;
  results: any[];
}

export interface Info {
  id: number;
  name: string;
  slug: string;
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<T[]>([]);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      setResults([]);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setCount(res.data.count);
          setError("");
          setLoading(false);
          setResults(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { count, error, loading, results };
};

export default useData;
