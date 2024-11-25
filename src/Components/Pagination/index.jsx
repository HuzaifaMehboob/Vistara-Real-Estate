import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      {/* Page Info */}
      <span className=" text-gray-700  dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900 dark:text-white px-2">{(currentPage - 1) * 10 + 1}</span> 
        to <span className="font-semibold text-gray-900 dark:text-white px-2">{Math.min(currentPage * 10, totalPages * 10)}</span> 
        of <span className="font-semibold text-gray-900 dark:text-white px-2">{totalPages * 10}</span> Entries
      </span>

      {/* Pagination Controls */}
      <div className="inline-flex mt-2 gap-2 xs:mt-0">
        {/* Previous Button */}
        <button
          className="flex items-center justify-center px-12  h-12 text-sm font-medium text-white bg-green-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>

        {/* Next Button */}
        <button
          className="flex items-center justify-center px-12 h-12 text-sm font-medium text-white bg-green-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
