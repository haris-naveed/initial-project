import React, { useState } from "react";
import Pagination from "react-js-pagination";

const PaginationComp = ({ postsPerPage, paginate }) => {
  const [activePage, setActivePage] = useState(1);

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
    paginate(pageNumber);
  }
  return (
    <div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={postsPerPage}
        totalItemsCount={3}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        firstPageText="First Page"
        lastPageText="Last Page"
      />
    </div>
  );
};

export default PaginationComp;
