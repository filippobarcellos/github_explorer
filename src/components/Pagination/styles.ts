import styled, { css } from 'styled-components';

interface ItemProps{
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  span {
    background: #fff;
    padding: 2px 4px;
    height: 29.18px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s;

      &:hover {
        background: #E9E9EE;
      }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }
`

export const Page = styled.li<ItemProps>`
  & + li {
    margin-left: 8px;
  }

  &:first-of-type {
    margin-left: 8px;
  }
  &:last-of-type {
    margin-right: 8px;
  }

    button {
      border: none;
      background: #fff;
      padding: 6px 10px;
      border-radius: 5px;
      color: #3d3d4d;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;

      ${props => props.active && css`
        background: #E9E9EE;
      `}

      &:hover {
        background: #E9E9EE;
      }
    }
`