import React from "react";
import { ButtonDefault } from "./buttons/ButtonDefault";

function Pagination({ currentPage, totalPages, onNext, onPrevious, setPage }) {
  function handlePreviousPage() {
    setPage((prevPage) => prevPage - 1);
    onPrevious();
  }

  function handleNextPage() {
    setPage((prevPage) => prevPage + 1);
    onNext();
  }

  return (
    <div>
      <ButtonDefault
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        content="Anterior"
      ></ButtonDefault>
      <a> </a>
      <ButtonDefault
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        content="Siguiente"
      ></ButtonDefault>
    </div>
  );
}

export default Pagination;
