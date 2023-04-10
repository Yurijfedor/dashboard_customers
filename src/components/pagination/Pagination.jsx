import { useState, useEffect } from "react";
import {
  PaginationContainer,
  PaginationButton,
  PaginationWrapp,
  PaginationText,
} from "./Pagination.styled";

export const Pagination = ({
  data,
  setVisibleData,
  pageLimit = 4,
  dataLimit = 8,
}) => {
  const [pages, setPages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPages(Math.ceil(data.length / dataLimit));
  }, [data, dataLimit]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;
  const getPaginatedData = () => {
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    setVisibleData(getPaginatedData(currentPage));
    // eslint-disable-next-line
  }, [currentPage, setVisibleData]);

  return (
    <PaginationWrapp>
      <PaginationText>{`Showing data ${startIndex + 1} to ${
        endIndex > data.length ? data.length : endIndex
      } of ${data.length} entries`}</PaginationText>
      <PaginationContainer>
        <PaginationButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1 ? true : false}
        >
          {"<"}
        </PaginationButton>

        {getPaginationGroup().map((item, index) => (
          <PaginationButton
            key={index}
            onClick={changePage}
            isActive={currentPage === item ? "active" : null}
          >
            {item}
          </PaginationButton>
        ))}
        <span style={{ display: "flex", alignItems: "flex-end" }}>...</span>
        <PaginationButton>40</PaginationButton>

        <PaginationButton
          onClick={goToNextPage}
          disabled={currentPage === pages ? true : false}
        >
          {">"}
        </PaginationButton>
      </PaginationContainer>
    </PaginationWrapp>
  );
};
