import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container, Menu } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  location?: string;
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation();
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <Menu>
          <ul>
            <li>
              <Link className={pathname === '/' ? 'active' : ''} to="/">
                Listagem
              </Link>
            </li>
            <li>
              <Link
                className={pathname === '/import' ? 'active' : ''}
                to="/import"
              >
                Importar
              </Link>
            </li>
          </ul>
        </Menu>
      </header>
    </Container>
  );
};

export default Header;
