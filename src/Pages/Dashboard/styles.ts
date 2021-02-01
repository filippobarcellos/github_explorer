import styled from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  error: boolean;
}
 
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 1px solid ${props => props.error ? '#c53030' : ' #fff'};
    border-right: 0;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3
    }
  }

  button {
    width: 200px;
    height: 50px;
    border: 0;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const UserList = styled.div`
  margin-top: 80px;
  max-width: 700px;
  
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 18px;
      color: #3d3d4d;
    }

    span {
      font-size: 15px;
      color: #a8a8b2;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 16px;
  font-size: 15px;
`