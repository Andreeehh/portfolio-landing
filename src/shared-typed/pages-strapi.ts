import { PageData } from './page-data';

export type PagesStrapi = {
  data: {
    pages: {
      data: {
        attributes: PageData;
      }[];
    };
  };
};
