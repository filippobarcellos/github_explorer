import React from 'react';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <img src={logo} alt="Github Explorer"/>
      {children}
    </Container>
  )
}

export default Header;