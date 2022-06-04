import { Box, Stack, Text } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

type PaginationProps = {
  total: number;
  perPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return Array.from({ length: to - from }, (_, index) => {
    return index + from + 1;
  }).filter((page) => page > 0);
}

export function Pagination({
  total,
  perPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(total / perPage);
  const isFirstPage = currentPage === 1;

  const previousPages = isFirstPage
    ? []
    : generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1);

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.500" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length &&
          previousPages.map((page) => (
            <PaginationItem number={page} key={page} />
          ))}

        <PaginationItem number={currentPage} isCurrent />

        {nextPages.length &&
          nextPages.map((page) => <PaginationItem number={page} key={page} />)}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.500" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
