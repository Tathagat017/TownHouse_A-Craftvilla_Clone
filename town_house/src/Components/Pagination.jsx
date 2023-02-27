import React from "react";
import { Button } from "@chakra-ui/react";
function Pagination({ totalPages, currentPage, handlePageChange }) {
  let pages = new Array(totalPages).fill(0).map((a, i) => {
    return (
      <Button
        onClick={() => handlePageChange(i + 1)}
        isDisabled={currentPage == i + 1}
        key={i + 1}
      >
        {i + 1}
      </Button>
    );
  });
  return <div>{pages}</div>;
}
export default Pagination;
