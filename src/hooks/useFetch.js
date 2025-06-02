import { useEffect, useRef, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  let isMounted = useRef(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    isMounted.current = true;
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const responseData = await response.json();
        if (isMounted.current) {
          setIsLoading(false);
          setData(responseData);
        }
      } catch (error) {
        if (isMounted.current) {
          setError(error);
          setIsLoading(false);
        }
      } finally {
        if (isMounted.current) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
      controller.abort();
    };
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}
