import { request } from 'graphql-request';
import { GRAPHQL_QUERIES } from '../graphql/queries';
import config from '../config';
import { PagesStrapi } from '../shared-typed/pages-strapi';

export type LoadPagesVariables = {
  slug?: string;
};

export const loadPages = async (variables: LoadPagesVariables = {}): Promise<PagesStrapi> => {
  try {
    const data = (await request(config.graphqlUrl, GRAPHQL_QUERIES, { ...variables })) as PagesStrapi;
    return data;
  } catch (error) {
    console.error('Erro na requisição GraphQL:', error);
    throw error; // Rejoga o erro para que quem chama a função também possa tratá-lo
  }
};
