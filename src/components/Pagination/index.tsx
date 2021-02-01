import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Page } from './styles';

interface IProps {
  totalItems: number,
  activePage: number,
  itemsPerPage: number,
  onPageChange: (page: number) => void,
}

const Pagination = ({ totalItems, activePage, onPageChange, itemsPerPage }: IProps) => {
  const pages = Math.ceil(totalItems / itemsPerPage);
  
  const pagesArr = Array.from(Array(pages), (_,x) => x + 1);

  return (
    <Container>
      
      <span onClick={() => console.log(activePage)}>
        <FiChevronLeft size={16} />
      </span>
      
      <ul>
        {pagesArr.map(page => (
          <Page key={page} active={activePage === page}>
            <button onClick={() => onPageChange(page)}>{page}</button>
          </Page>
        ))}
      </ul>

      <span onClick={() => onPageChange(activePage += 1)}>
        <FiChevronRight size={16} />
      </span>
    </Container>
  )
}

export default Pagination;