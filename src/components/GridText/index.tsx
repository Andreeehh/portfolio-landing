import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { HtmlContent } from '../HtmlContent';
import { CoverCarousel } from '../CoverCarousel';
import { StrapiImages } from '../../shared-typed/strapi-images';

export type GridTextElementProps = {
  title: string;
  description: string;
  cover?: StrapiImages;
};

export type GridTextProps = {
  background?: boolean;
  title: string;
  description: string;
  grid: GridTextElementProps[];
  sectionId?: string;
  component?: string;
};

export const GridText = ({ title, description, grid, background = false, sectionId = '' }: GridTextProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => {
            return (
              <Styled.GridElement key={el.title}>
                <Heading size="medium" colorDark={!background} as="h3">
                  {el.title}
                </Heading>
                <HtmlContent html={el.description}></HtmlContent>
                {el.cover.data.length > 0 && (
                  <Styled.Carousel>
                    <CoverCarousel images={el.cover}></CoverCarousel>
                  </Styled.Carousel>
                )}
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
