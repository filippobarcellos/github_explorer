import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Page } from './styles';

interface IProps {
  totalItems: number,
  currentPage: number,
  itemsPerPage: number,
  onPageChange: (page: number) => void,
}

const Pagination = ({ totalItems, currentPage, onPageChange, itemsPerPage }: IProps) => {
  const [maxNumberPagesShowing, setMaxNumberPagesShowing] = useState(5);
  const [maxNumberLimit, setMaxNumberLimit] = useState(5);
  const [minNumberLimit, setMinNumberLimit] = useState(1);


  const pages = Math.ceil(totalItems / itemsPerPage);
  
  const pagesArr = Array.from(Array(pages), (_,x) => x + 1);

  const handleNextButton = () => {
    if (currentPage >= pages) {
      onPageChange(currentPage);
    } else {
      onPageChange(currentPage += 1);
    }

    if (currentPage > maxNumberLimit && !(currentPage >= pages)) {
      setMaxNumberLimit(maxNumberLimit + maxNumberPagesShowing);
      setMinNumberLimit( minNumberLimit + maxNumberPagesShowing);
    }
  }

  const handlePrevButton = () => {
    if (currentPage <= 1) {
      onPageChange(1);
    } else {
      onPageChange(currentPage -+ 1);
    }

    if (currentPage <= minNumberLimit && !(currentPage <=1) ) {
      setMaxNumberLimit(maxNumberLimit - maxNumberPagesShowing);
      setMinNumberLimit( minNumberLimit - maxNumberPagesShowing);
    }
  }

  return (
    <Container>
      
      <span onClick={() => handlePrevButton()}>
        <FiChevronLeft size={16} />
      </span>
      
      <ul>
        {pagesArr.map(page => {
          if (page <= maxNumberLimit && page >= minNumberLimit) {
            return <Page key={page} active={currentPage === page}>
              <button onClick={() => onPageChange(page)}>{page}</button>
            </Page>
          }
        })}
      </ul>

      <span onClick={() => handleNextButton()}>
        <FiChevronRight size={16} />
      </span>
    </Container>
  )
}

export default Pagination;