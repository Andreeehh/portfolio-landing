import config from '../config';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';
import { PageData } from '../shared-typed/page-data';

export type HomeProps = {
  data: PageData;
};

export default function Index(props: HomeProps) {
  const { data } = props;

  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let data;
  try {
    data = await loadPages({ slug: config.defaultSlug });
  } catch {
    data = null;
  }

  if (!data || data.title === '') {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.pages.data[0].attributes,
    },
  };
};
