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
    gap: 5rem;
    text-align: center;
    font-size: ${fonts.sizes.small};
    font-weight: 500;
  }

  ul li {
    cursor: pointer;
    text-transform: capitalize;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;

    ul {
      width: 100%;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      margin: 3rem 0;
    }
  }
`;
