import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setisLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error);
        console.erorr(error);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
