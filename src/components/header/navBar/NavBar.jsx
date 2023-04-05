import {
  NavBarContainer,
  NavList,
  NavItem,
  NavItemText,
  NavTextWrapp,
} from "./NavBar.styled";
import { Icon } from "../../icon/Icon";

export const NavBar = () => {
  const pages = [
    "dashboard",
    "product",
    "customers",
    "income",
    "promote",
    "help",
  ];
  return (
    <NavBarContainer>
      <NavList>
        {pages.map((page) => (
          <NavItem key={page}>
            <NavTextWrapp>
              <Icon name={page} />
              <NavItemText>{page}</NavItemText>
            </NavTextWrapp>
            <Icon name="icon-chevron-right-2-min" />
          </NavItem>
        ))}
      </NavList>
    </NavBarContainer>
  );
};
