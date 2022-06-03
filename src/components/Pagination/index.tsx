import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerpage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    }) 
    .filter(page => page > 0)
}

export function Pagination({ 
  totalCountOfRegisters,
  registersPerpage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps ) {
  const lastpage = Math.floor(totalCountOfRegisters / registersPerpage);
  
  const previousPages = currentPage >  1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastpage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastpage))    
    : []
  
  return (
    <Stack
      direction={['column','row']}
      mt='8'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
        <Stack direction='row' spacing='2'>

          {currentPage > (1 + siblingsCount) && (
            <>
              <PaginationItem number={1} />
              { currentPage > (2 + siblingsCount) && (
              <Text 
                color='gray.300'
                width='6'
                textAlign='center'
              >...</Text>) }
            </>
          )}

          {previousPages.length > 0 && previousPages.map(page => {
            return <PaginationItem key={page} number={page} />
          })}

          <PaginationItem number={currentPage} isCurrent />

          {nextPages.length > 0 && nextPages.map(page => {
            return <PaginationItem key={page} number={page} />
          })}

          {(currentPage + siblingsCount) < lastpage && (
            <>
              { (currentPage + 1 + siblingsCount ) > lastpage &&  (
              <Text 
                color='gray.300'
                width='6'
                textAlign='center'
              >...</Text>) }
              <PaginationItem number={lastpage} />
            </>
            
          )}

        </Stack>
    </Stack>
  );
}