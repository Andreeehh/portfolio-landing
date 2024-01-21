import * as Styled from './styles';
import { MenuLink } from '../MenuLink';
import { MenuLinkProps } from '../../shared-typed/page-data';

export type NavLinksProps = {
  links?: MenuLinkProps[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.id} {...link} />
      ))}
    </Styled.Container>
  );
};
