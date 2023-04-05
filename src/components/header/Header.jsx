import { Logo } from "./logo/Logo";
import { NavBar } from "./navBar/NavBar";
import { Profile } from "./profile/Profile";
import { HeaderContainer, NavWrapp } from "./Header.styled";
import userAvatar from "../../images/userAvatar.jpg";

export const Header = () => {
  const user = {
    name: "Evano",
    position: "Project Manager",
    avatar: userAvatar,
  };
  return (
    <HeaderContainer>
      <NavWrapp>
        <Logo />
        <NavBar />
      </NavWrapp>
      <Profile user={user} />
    </HeaderContainer>
  );
};
