import { User } from "../../constants/interfaces";
import { logout } from "../../helpers/api";
import { MediumImage } from "../styled/styledTheme";
import {
  HeaderWrapper,
  HeaderProfile,
  SearchInput,
  HeaderSearch,
  SearchIcon,
  ProfileButton,
  LogoutIcon,
} from "./Header.styles";
import { useHistory } from "react-router";
import { useUserContext } from "../../hooks/useUserContext";

export const Header = ({ user }: { user: User | undefined }) => {
  const history = useHistory();
  const { checkForUser } = useUserContext();
  const handleLogout = async () => {
    try {
      await logout();
      if (checkForUser) checkForUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HeaderWrapper>
      <div>
        <MediumImage
          onClick={() => history.push("/")}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          }
        />
      </div>
      <HeaderSearch>
        <div>
          <SearchInput type="text" />
          <SearchIcon />
        </div>
      </HeaderSearch>

      <HeaderProfile>
        <ProfileButton to={`/p/${user?.username}`}>
          <MediumImage src={user?.picture} />
          <span>{user?.displayname}</span>
        </ProfileButton>
        <LogoutIcon onClick={handleLogout} />
      </HeaderProfile>
    </HeaderWrapper>
  );
};
