import Head from 'next/head';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';

import { Base } from '../Base';

import config from '../../config';
import { theme } from '../../styles/theme';
import { useRouter } from 'next/router';
import { Loading } from '../Loading';
import { PageData } from '../../shared-typed/page-data';

type HomeProps = {
  data: PageData;
};

function Home({ data }: HomeProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }
  const { menu, sections, footer_text, slug, title } = data;
  const { menu_links, logo_text, logo_link, logo } = menu;
  const srcImg = logo.data.attributes.url;

  return (
    // <>
    //   <h1>Oi</h1>
    // </>
    <Base links={menu_links} footerHtml={footer_text} logoData={{ text: logo_text, link: logo_link, srcImg }}>
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
        <meta name="theme-color" content={theme.colors.primaryColor} />
        <meta name="description" content="As landing pages mais legais da Internet." />{' '}
      </Head>
      {sections.map((section, index) => {
        const { __typename } = section;
        const key = `${slug}-${index}`;
        if (__typename === 'ComponentSectionSectionTwoColumns') {
          return (
            <GridTwoColumns
              key={key}
              title={section.title}
              description={section.description}
              srcImg={section.image.data.attributes.url}
              background={section.metadata.background}
              sectionId={section.metadata.section_id}
            />
          );
        }

        if (__typename === 'ComponentSectionSectionContent') {
          return (
            <GridContent
              key={key}
              title={section.title}
              html={section.content}
              background={section.metadata.background}
              sectionId={section.metadata.section_id}
            />
          );
        }

        if (__typename === 'ComponentSectionSectionGrid') {
          //TODO
          // if (section.text_grid > 0) {
          return (
            <GridText
              key={key}
              background={section.metadata.background}
              sectionId={section.metadata.section_id}
              title={section.title}
              description={section.description}
              grid={section.text_grid}
            />
          );
          // } else {
          //   return (
          //     <GridImage
          //       key={key}
          //       {...section}
          //       background={section.metadata.background}
          //       sectionId={section.metadata.section_id}
          //       title={section.title}
          //       description={section.description}
          //       grid={section.image_grid}
          //     />
          //   );
          // }
        }
      })}
    </Base>
  );
}

export default Home;
