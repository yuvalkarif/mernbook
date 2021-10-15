import { useContext } from "react";
import {
  WriterContainer,
  WriterProfile,
  ActionButton,
  PhotoIcon,
} from "./PostWriter.styles";
import UserContext from "../../constants/context";
import TextareaAutosize from "react-textarea-autosize";

export const PostWriter = () => {
  const { user } = useContext(UserContext);
  return (
    <WriterContainer>
      <div>
        <WriterProfile src={user?.picture} />
        <TextareaAutosize placeholder="Whats on your mind?" />
      </div>

      <ActionButton>
        <PhotoIcon />
        Add a photo
      </ActionButton>
    </WriterContainer>
  );
};
