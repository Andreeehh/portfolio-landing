import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { HtmlContent } from '../HtmlContent';

export type GridTextElementProps = {
  title: string;
  description: string;
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
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <HtmlContent html={el.description}></HtmlContent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
