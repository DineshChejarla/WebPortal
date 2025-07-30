import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  onItemsPerPageChange,
  showPageSizeOptions = true,
  showPageJump = true,
  noOfPagesJump = 2,
}) => {
  const maxVisiblePages = 5;
  const halfVisible = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - halfVisible);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const firstItem = (currentPage - 1) * itemsPerPage + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageJump = (e) => {
    if (e.key === "Enter") {
      const page = Math.min(
        Math.max(1, parseInt(e.target.value) || 1),
        totalPages
      );
      onPageChange(page);
      e.target.value = "";
    }
  };

  return (
    <div className={styles.paginationContainer}>
      {totalItems > 0 && (
        <div className={styles.paginationInfo}>
          Showing {firstItem}-{lastItem} of {totalItems} items
          {showPageSizeOptions && (
            <select
              className={styles.pageSizeSelect}
              onChange={(e) => {
                onItemsPerPageChange(parseInt(e.target.value));
                onPageChange(1);
              }}
              value={itemsPerPage}
            >
              <option value={6}>6 per page</option>
              <option value={9}>9 per page</option>
              <option value={12}>12 per page</option>
              <option value={15}>15 per page</option>
            </select>
          )}
        </div>
      )}

      {totalPages > 1 && (
        <>
          <div className={styles.pagination}>
            <button
              onClick={() =>
                onPageChange(
                  currentPage - noOfPagesJump <= 1
                    ? 1
                    : currentPage - noOfPagesJump
                )
              }
              disabled={currentPage === 1}
              className={`${styles.paginationButton} ${styles.edge}`}
            >
              ««
            </button>

            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              «
            </button>

            {startPage > 1 && (
              <span className={styles.paginationEllipsis}>...</span>
            )}

            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`${styles.paginationButton} ${
                  currentPage === page ? styles.active : ""
                }`}
              >
                {page}
              </button>
            ))}

            {endPage < totalPages && (
              <span className={styles.paginationEllipsis}>...</span>
            )}

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
            >
              »
            </button>

            <button
              onClick={() =>
                onPageChange(
                  currentPage + noOfPagesJump >= totalPages
                    ? totalPages
                    : currentPage + noOfPagesJump
                )
              }
              disabled={currentPage === totalPages}
              className={`${styles.paginationButton} ${styles.edge}`}
            >
              »»
            </button>
          </div>

          {showPageJump && (
            <div className={styles.pageJump}>
              <span>Go to page:</span>
              <input
                type="number"
                min="1"
                max={totalPages}
                defaultValue={currentPage}
                onKeyDown={handlePageJump}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
