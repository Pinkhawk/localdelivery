// hooks/usePagination.ts

export function usePagination(
  page: number,
  pageSize: number
) {
  const offset =
    (page - 1) * pageSize;

  return {
    offset,
    limit: pageSize,
  };
}