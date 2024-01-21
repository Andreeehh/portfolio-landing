import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 90rem;
    height: 38rem;
    max-height: 38rem;
    max-width: 90rem;
    @media ${theme.media.lteMedium} {
      width: 35rem;
      height: 30rem;
      max-height: 30rem;
      max-width: 35rem;
    }
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    width: 90rem;
    height: 38rem;
    max-height: 38rem;
    max-width: 90rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    transition: opacity 300ms ease-in-out;
    @media ${theme.media.lteMedium} {
      width: 35rem;
      height: 30rem;
      max-height: 30rem;
      max-width: 35rem;
    }
  `}
`;
