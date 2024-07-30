import styled from 'styled-components';

import themes from '../../styles/themes.styles';

const { colors, fonts } = themes;

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  padding: 2.2rem 4.8rem;

  ul {
    list-style-type: none;
    display: flex;
    gap: 8rem;
    text-align: center;
    font-size: ${fonts.sizes.small};
    font-weight: 500;
  }

  ul li {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
