import { Logo } from "./logo/Logo";
import { NavBar } from "./navBar/NavBar";
import { Profile } from "./profile/Profile";
import { HeaderContainer, NavWrapp } from "./Header.styled";

export const Header = ({ setPage, user }) => {
  return (
    <HeaderContainer>
      <NavWrapp>
        <Logo />
        <NavBar setPage={setPage} />
      </NavWrapp>
      <Profile user={user} />
    </HeaderContainer>
  );
};
