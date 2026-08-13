import { useMemo } from "react";

export type UsePaginationOptions = {
  /** 전체 페이지 수 */
  count: number;
  /** 현재 페이지 (1-based) */
  page?: number;
  /** 현재 페이지 좌·우에 노출할 페이지 수 (기본값: 1) */
  siblingCount?: number;
};

/** 렌더링할 페이지 번호 또는 생략 표시("ellipsis") */
export type PaginationRangeItem = number | "ellipsis";

/**
 * MUI Pagination 알고리즘을 적용하는 훅.
 *
 * 시작·끝 페이지는 각각 1페이지만 고정 노출하고,
 * siblingCount로 현재 페이지 주변 범위를 제한한다.
 * 숨겨진 페이지가 2개 이상일 때만 "ellipsis"을 삽입한다.
 */
export const usePagination = ({
  count,
  page = 1,
  siblingCount = 1,
}: UsePaginationOptions): PaginationRangeItem[] => {
  return useMemo(() => {
    /** [start, end] 구간의 연속된 정수 배열 생성 */
    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, index) => start + index);
    };

    /**
     * 줄임표 없이 한 줄에 담을 수 있는 최대 페이지 버튼 수.
     * siblingCount * 2 + 5
     */
    const totalPageNumbers = siblingCount * 2 + 5;

    /**
     * 전체 페이지 수가 한 줄에 표시할 수 있는 최대 페이지 번호 개수보다
     * 작거나 같으면 모든 페이지를 그대로 반환.
     */
    if (count <= totalPageNumbers) {
      return range(1, count);
    }

    /**
     * 현재 페이지를 중심으로 sibling 범위를 잡되,
     * 시작(1)과 끝(count) 고정 영역과 겹치지 않도록 clamp.
     */
    const leftSiblingIndex = Math.max(page - siblingCount, 2);
    const rightSiblingIndex = Math.min(page + siblingCount, count - 1);

    /**
     * "ellipsis" 표시 여부.
     *
     * leftSiblingIndex=5 -> 1과 5 사이에 2,3,4가 있으므로 "ellipsis" 필요
     * leftSiblingIndex=3 -> 1과 3 사이에 2만 있으므로 "ellipsis" 불필요 (페이지 2를 직접 표시)
     */
    const shouldShowLeftDots = leftSiblingIndex > 3;
    const shouldShowRightDots = rightSiblingIndex < count - 2;

    /**
     * Case 1: 왼쪽 "ellipsis" 없음, 오른쪽 "ellipsis" 있음
     *
     * page=1, count=50 -> [1, 2, 3, 4, 5, "ellipsis", 50]
     */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblingCount * 2 + 3;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, "ellipsis", count];
    }

    /**
     * Case 2: 왼쪽 "ellipsis" 있음, 오른쪽 "ellipsis" 없음
     *
     * page=50, count=50 -> [1, "ellipsis", 46, 47, 48, 49, 50]
     */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = siblingCount * 2 + 3;
      const rightRange = range(count - rightItemCount + 1, count);

      return [1, "ellipsis", ...rightRange];
    }

    /**
     * Case 3: 양쪽 "ellipsis" 모두 있음
     *
     * page=25, count=50 -> [1, "ellipsis", 24, 25, 26, "ellipsis", 50]
     */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [1, "ellipsis", ...middleRange, "ellipsis", count];
    }

    /**
     * Case 4: 양쪽 "ellipsis" 모두 없음 — sibling 범위가 시작·끝과 자연스럽게 이어지는 경우
     */
    return range(1, count);
  }, [count, page, siblingCount]);
};
