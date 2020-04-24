import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;

    li {
      & + li {
        margin-left: 40px;
      }

      .active {
        cursor: default;
        border-bottom: 3px solid #ff872c;
        padding-bottom: 12px;
        font-weight: bold;
      }

      a {
        position: relative;
        color: #fff;
        text-decoration: none;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          top: 35px;
          bottom: 0;
          left: 0;
          background-color: #ff872c;
          visibility: hidden;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.2s ease-in-out 0s;
        }

        &:hover:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }

        &:visited {
          text-decoration: underline;
        }
      }
    }
  }
`;
