import { useEffect, useState } from "react";

import AccordianPanel from "../Accordian/AccordianPanel";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

function genereateData(dataLength) {
  return Array.from({ length: dataLength }, (_, i) => {
    return {
      question: `Item ${i + 1}`,
      answer: `Item ${i + 1}`,
    };
  });
}

function DataScreen() {
  const [currentpage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState(genereateData(5));

  const fetchMoreData = async () => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(setCurrentPage((prevState) => prevState + 1)),
        1000
      );
    });
  };

  const { observerRef, isDataFetching } = useInfiniteScroll(fetchMoreData);

  useEffect(() => {
    console.log(currentpage);
    const startLimit = currentpage * 4;
    const endLimit = startLimit + 4;
    console.log(genereateData(endLimit));
    setPageData(genereateData(endLimit));
  }, [currentpage]);
  return (
    <div className="infinte-scroll-container">
      {pageData.map((item, index) => (
        <AccordianPanel accordianData={item} key={item.question + index} />
      ))}
      {/* Sentinel div for intersection observer */}
      <div ref={observerRef} style={{ height: 1 }} />
      {isDataFetching && <div>Loading...</div>}
    </div>
  );
}

export default DataScreen;
