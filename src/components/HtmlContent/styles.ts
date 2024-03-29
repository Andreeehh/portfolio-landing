import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    iframe[src*='ads'] {
      display: none;
    }
    font-size: calc(${theme.font.sizes.small} + 0.2rem);
    line-height: 1.5;

    p {
      margin: ${theme.spacings.medium} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondaryColor};
      text-decoration: none;
      font-size: calc(${theme.font.sizes.large} + 0.2rem);
      transition: all 300ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
    }

    .image-style-side {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    ul,
    ol {
      margin: ${theme.spacings.medium} ${theme.spacings.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
      margin: ${theme.spacings.medium} 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondaryColor};
      color: ${theme.colors.mediumGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }

    @media ${theme.media.lteMedium} {
      font-size: 2rem;

      .image-style-side {
        float: none;
        max-width: 100%;
        margin: 0;
      }
    }
  `}
`;
