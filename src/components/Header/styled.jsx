import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
    transition: all 150ms ease;

    &:hover {
      color: #ddd;
    }
  }
`;
