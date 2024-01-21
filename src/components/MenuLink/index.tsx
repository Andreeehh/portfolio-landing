import { MenuLinkProps } from '../../shared-typed/page-data';
import * as Styled from './styles';

export const MenuLink = ({ link_test, url, open_in_new_tab = false }: MenuLinkProps) => {
  const target = open_in_new_tab ? '_blank' : '_self';
  return (
    <Styled.Container href={url} target={target}>
      {link_test}
    </Styled.Container>
  );
};
