import styled from 'styled-components';

export const UserInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%
    }

    div {
      margin-left: 24px;


      strong {
        font-size: 32px;
        color: #3d3d4d;
        display: block;
      }

      span {
        font-size: 16px;
        color: #737380;
        margin-top: 4px;
        display: block;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 32px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`

export const Repositories = styled.div`
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
`