function getPaginationData(currentPage, numberOfPages) {
  let isFirstPage = Boolean(currentPage == 0);
  let isLastPage = Boolean(currentPage == numberOfPages - 2);
  let minimumNextPageSize = 2;

  if (currentPage == 0) {
    minimumNextPageSize = minimumNextPageSize + 2;
  }

  if (currentPage == 1) {
    minimumNextPageSize = minimumNextPageSize + 1;
  }

  if (currentPage == numberOfPages - 1) {
    minimumNextPageSize = minimumNextPageSize - 1;
  }
  if (currentPage == numberOfPages) {
    minimumNextPageSize = 0;
  }

  let prevThreePageButtons = Array.from(
    { length: 2 },
    (_, i) => currentPage - 1 - i
  ).filter((value) => value >= 0);

  let nextThreePageButtons = Array.from(
    { length: minimumNextPageSize },
    (_, i) => currentPage + 1 + i
  ).filter((value) => value >= 0);

  let buttonNumberList = [
    ...prevThreePageButtons,
    currentPage,
    ...nextThreePageButtons,
  ].sort((a, b) => a - b);

  return { isFirstPage, isLastPage, buttonNumberList };
}

function Pagination({ numberOfPages, updatePage, currentPage }) {
  let { isFirstPage, isLastPage, buttonNumberList } = getPaginationData(
    currentPage,
    numberOfPages
  );

  //   console.log(buttonNumberList);

  return (
    <div className="pagination-container">
      {/* <button className="pagination-button">&laquo;</button> */}
      <button
        className={`pagination-button ${
          isFirstPage ? "disable-pagination-button" : ""
        }`}
        onClick={() => updatePage(-1, true)}
        disabled={isFirstPage}
      >
        &#8249;
      </button>
      {buttonNumberList.map((item) => {
        let isActivePage = Boolean(item == currentPage);
        return (
          <button
            key={item}
            onClick={() => updatePage(item)}
            className={
              isActivePage
                ? "pagination-button active-pagination-button"
                : "pagination-button"
            }
          >
            {item}
          </button>
        );
      })}

      <button
        className={`pagination-button ${
          isLastPage ? "disable-pagination-button" : ""
        }`}
        onClick={() => updatePage(1, true)}
        disabled={isLastPage}
      >
        &#8250;
      </button>
      {/* <button className="pagination-button">&raquo;</button> */}
    </div>
  );
}

export default Pagination;
