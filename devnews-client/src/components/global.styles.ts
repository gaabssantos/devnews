import styled from 'styled-components';

import themes from '../styles/themes.styles';

const {
  colors,
  fonts: { sizes },
} = themes;

export const Button = styled.button`
  border-radius: 0.8rem;
  background: ${colors.secondary};
  display: flex;
  padding: 1rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 0;
  color: ${colors.white};
  cursor: pointer;
  font-size: ${sizes.medium};
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
