import { useMemo } from "react";

// Define the type for the range function
type RangeFunction = (start: number, end: number) => number[];

// Define a type for the DOTS variable
type DotsType = string; // You can change the type of DOTS as needed

export const DOTS = "...";

const range: RangeFunction = (start: number, end: number): number[] => {
  let length = end - start + 1;
  /*
    Create an array of a certain length and set the elements within it from
    the start value to the end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}): Array<number | DotsType> => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      // Assuming range is a function that returns an array of numbers
      return range(1, totalPageCount) as Array<number | DotsType>;
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount) as Array<number | DotsType>;

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      ) as Array<number | DotsType>;
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex) as Array<
        number | DotsType
      >;
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    // Return an empty array by default if none of the conditions are met
    return [];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
