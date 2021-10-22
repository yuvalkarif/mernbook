import { User } from "../../constants/interfaces";
<<<<<<< Updated upstream
import { BigAvatar, ProfileWrapper } from "./Search.styles";
export const SearchProfile = ({ user }: { user: User }) => {
  return (
    <ProfileWrapper>
=======
import { BigAvatar, ProfileWrapper, ShortcutIcon } from "./Search.styles";
import { useHistory } from "react-router";
import { Shortcut } from "@styled-icons/material-rounded";
export const SearchProfile = ({ user }: { user: User }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/p/${user.username}`);
  };
  return (
    <ProfileWrapper onClick={handleClick}>
>>>>>>> Stashed changes
      <BigAvatar src={user.picture} />
      <div>
        <span>{user.displayname}</span>
        <span>{user?.about?.work || user?.about?.education}</span>
      </div>
<<<<<<< Updated upstream
=======
      <ShortcutIcon />
>>>>>>> Stashed changes
    </ProfileWrapper>
  );
};
