import styled from 'styled-components';

import themes from '../../styles/themes.styles';

const { colors } = themes;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.4rem 2.8rem;

  .weather {
    display: flex;
    align-items: center;
  }

  .search {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  svg {
    font-size: 3.3rem;
    color: ${colors.secondary};
  }

  p {
    font-weight: bold;
    font-size: 1.6rem;
    margin-left: 0.8rem;
  }
`;

export const InputControl = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;
  align-self: stretch;
  background: ${colors.whitef2f2f2};
  width: 70%;
  border-radius: 154px;

  input {
    border: 0;
    border-radius: 154px;
    padding: 2.1rem 4.6rem;
    width: 100%;
    background: ${colors.whitef2f2f2};
  }

  svg {
    font-size: 2rem;
    color: ${colors.black};
  }
`;
