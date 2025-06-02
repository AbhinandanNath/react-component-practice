import { useEffect, useRef, useState } from "react";

let defaultConfig = {
  root: null, // Use viewport as root
  threshold: 0.5,
};

export default function useInfiniteScroll(
  fetchDataFn,
  optionsConfing = defaultConfig
) {
  const [isDataFetching, setIsDataFetching] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const currentRef = observerRef.current;
    if (!currentRef) {
      console.error("Intersection Observer expired");
      return;
    }

    const interSectionObserver = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setIsDataFetching(true);
      }
    }, optionsConfing);

    interSectionObserver.observe(currentRef);

    return () => {
      if (currentRef) {
        interSectionObserver.unobserve(currentRef);
      }
      interSectionObserver.disconnect();
    };
  }, [optionsConfing]);

  useEffect(() => {
    if (isDataFetching) {
      fetchDataFn().finally(() => setIsDataFetching(false));
    }
  }, [fetchDataFn, isDataFetching]);

  return { observerRef, isDataFetching };
}
