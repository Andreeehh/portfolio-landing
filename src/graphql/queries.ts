import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERIES = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_PAGE($slug: String) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          ...page
        }
      }
    }
  }
`;
