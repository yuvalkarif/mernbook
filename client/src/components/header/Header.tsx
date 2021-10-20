import { User } from "../../constants/interfaces";
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

export const Header = ({ user }: { user: User | undefined }) => {
  return (
    <HeaderWrapper>
      <div>
        <MediumImage
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
        <LogoutIcon />
      </HeaderProfile>
    </HeaderWrapper>
  );
};
