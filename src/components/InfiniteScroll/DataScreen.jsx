import { useEffect, useState } from "react";

import AccordianPanel from "../Accordian/AccordianPanel";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { dataGenerator } from "../../util/helperMethod";

function DataScreen() {
  const [currentpage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState(dataGenerator(5));

  const fetchMoreData = () => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(setCurrentPage((prevState) => prevState + 1)),
        1000
      );
    });
  };

  const { observerRef, isDataFetching } = useInfiniteScroll(fetchMoreData);

  useEffect(() => {
    // console.log(currentpage);
    const startLimit = currentpage * 4;
    const endLimit = startLimit + 4;
    // console.log(dataGenerator(endLimit));
    setPageData(dataGenerator(endLimit));
  }, [currentpage]);
  return (
    <div className="infinte-scroll-container">
      {pageData.map((item, index) => (
        <AccordianPanel
          accordianData={item}
          key={item.question + index}
          hideButtons={true}
        />
      ))}
      {/* Sentinel div for intersection observer */}
      <div ref={observerRef} style={{ height: 1 }} />
      {isDataFetching && <div>Loading...</div>}
    </div>
  );
}

export default DataScreen;
