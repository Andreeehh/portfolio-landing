import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment uploadFile on UploadFile {
    alternativeText
    url
  }

  fragment uploadFileEntity on UploadFileEntity {
    id
    attributes {
      ...uploadFile
    }
  }

  fragment uploadFileEntityResponse on UploadFileEntityResponse {
    data {
      ...uploadFileEntity
    }
  }

  fragment componentMenuMenuLink on ComponentMenuMenuLink {
    id
    link_test
    url
    open_in_new_tab
  }

  fragment componentMenuMenu on ComponentMenuMenu {
    id
    logo {
      ...uploadFileEntityResponse
    }
    logo_link
    logo_text
    menu_links {
      ...componentMenuMenuLink
    }
  }

  fragment sectionMetadata on ComponentSectionSectionMetadata {
    name
    section_id
    background
  }

  fragment sectionTwoColumns on ComponentSectionSectionTwoColumns {
    title
    description
    image {
      ...uploadFileEntityResponse
    }
    metadata {
      ...sectionMetadata
    }
  }

  fragment sectionGrid on ComponentSectionSectionGrid {
    title
    description
    text_grid {
      ...textGrid
    }
    image_grid {
      ...sectionImageGrid
    }
    metadata {
      ...sectionMetadata
    }
  }

  fragment sectionContent on ComponentSectionSectionContent {
    title
    content
    metadata {
      ...sectionMetadata
    }
  }

  fragment uploadFileEntityResponseColection on UploadFileRelationResponseCollection {
    data {
      ...uploadFileEntity
    }
  }

  fragment sectionImageGrid on ComponentSectionImageGrid {
    image {
      ...uploadFileEntityResponseColection
    }
  }

  fragment textGrid on ComponentSectionTextGrid {
    title
    description
  }

  fragment page on Page {
    title
    slug
    footer_text
    menu {
      ...componentMenuMenu
    }
    sections {
      ... on ComponentSectionSectionTwoColumns {
        ...sectionTwoColumns
        __typename
      }
      ... on ComponentSectionSectionGrid {
        ...sectionGrid
        __typename
      }
      ... on ComponentSectionSectionContent {
        ...sectionContent
        __typename
      }
    }
  }
`;
