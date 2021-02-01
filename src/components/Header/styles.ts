import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #666;
    transition: color 0.2s;

    &:hover {
      color: #3a3a3a;
    }
    
    svg {
      margin-right: 4px;
    }
  }
`