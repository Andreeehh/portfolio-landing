import { StrapiImages } from './strapi-images';

export type LogoLinkProps = {
  id: string;
  logo: {
    data: {
      id: string;
      attributes: {
        alternativeText: string | null;
        url: string;
      };
    };
  };
  logo_link: string;
  logo_text: string;
  menu_links: MenuLinkProps[];
};

export type MenuLinkProps = {
  id: string;
  link_test: string;
  url: string;
  open_in_new_tab: boolean;
};

export type ImageDataProps = {
  data: {
    id: string;
    attributes: {
      alternativeText: string | null;
      url: string;
    };
  };
};

export type SectionMetadataProps = {
  name: string;
  section_id: string;
  background: boolean;
};

export type TextGridElementProps = {
  title: string;
  description: string;
  cover: StrapiImages;
};

export type PageData = {
  title: string;
  slug: string;
  footer_text: string;
  menu: LogoLinkProps;
  sections: SectionProps[];
};

export type PagesStrapi = {
  data: {
    pages: {
      data: Array<{
        attributes: PageData;
      }>;
    };
  };
};
// Utilizado em Projects
export type ImageGridElementProps = {
  title: string;
  description: string;
};

export type SectionProps = {
  __typename: string;
  title: string;
  description?: string;
  content?: string;
  image?: ImageDataProps;
  text_grid?: TextGridElementProps[];
  image_grid?: ImageGridElementProps[];
  metadata: SectionMetadataProps;
};
