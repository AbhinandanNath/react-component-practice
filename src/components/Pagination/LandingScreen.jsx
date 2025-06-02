import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Post from "./Post";
// import useFetch from "../hooks/useFetch";

const URL = "https://dummyjson.com/products?limit=500";
const PAGE_SIZE = 5;

export default function LandingScreen() {
  const [postData, setPostData] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  //   const { data, isLoading, error } = useFetch(URL);

  function fetchMoreData(pageValue, isNextPreviousButtonClicked) {
    setCurrentPage((prevState) => {
      if (isNextPreviousButtonClicked) {
        return prevState + pageValue;
      }
      return pageValue;
    });
  }

  // 0-5, 5,10, 10-15

  async function fetchData() {
    const data = await fetch(URL);
    const jsonData = await data.json();
    setPostData(jsonData.products);
    setData(jsonData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = data.limit;
  const numberOfPages = Math.floor(totalProducts / PAGE_SIZE);
  const startLimit = currentPage * PAGE_SIZE;
  const endLimit = startLimit + PAGE_SIZE;

  //   console.log(startLimit, endLimit);
  return (
    <div>
      {postData.length == 0 ? (
        <p> loading Data</p>
      ) : (
        <Post postData={postData.slice(startLimit, endLimit)} />
      )}
      <Pagination
        numberOfPages={numberOfPages}
        updatePage={fetchMoreData}
        currentPage={currentPage}
      />
    </div>
  );
}

//
