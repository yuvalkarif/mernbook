import { User } from "../../constants/interfaces";
import {
  EditorContainer,
  InputEdit,
  SubmitButton,
  ExitButton,
} from "./Profile.styles";
import { ImageInput } from "../ImageInput/ImageInput";
import TextareaAutosize from "react-textarea-autosize";
import { BirthdayIcon, WorkIcon, EduIcon } from "./Profile.styles";
import { useState } from "react";
export const ProfileEditor = ({ user }: { user: User }) => {
  const [editUser, setEditUser] = useState({
    id: user.displayname,
    picture: user.picture,
    summary: user.about?.summary,
    work: user.about?.work,
    education: user.about?.education,
    birthday: user.about?.birthday,
  });
  return (
    <EditorContainer>
      <h2>Edit Profile</h2>
      <h3>Profile Picture</h3>
      <ImageInput />
      {/* // picture={editUser.picture} setEditUser={setEditUser} */}
      <h3>Summary</h3>
      <TextareaAutosize
        // placeholder={`Whats on your mind, ${user?.displayname.split(" ")[0]}?`}
        // onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={editUser.summary}
        onChange={(e) => setEditUser({ ...editUser, summary: e.target.value })}
      />
      <h3>About</h3>
      <div className="edit-about">
        <span>
          <WorkIcon />
          <p>Works at</p>
          <InputEdit
            type="text"
            value={editUser.work}
            onChange={(e) => setEditUser({ ...editUser, work: e.target.value })}
          />
        </span>
        <span>
          <EduIcon />
          <p>Went to</p>
          <InputEdit
            type="text"
            value={editUser.education}
            onChange={(e) =>
              setEditUser({ ...editUser, education: e.target.value })
            }
          />
        </span>
        <span>
          <BirthdayIcon />
          <p>Born in</p>
          <InputEdit
            type="text"
            value={editUser.birthday}
            onChange={(e) =>
              setEditUser({ ...editUser, birthday: e.target.value })
            }
          />
        </span>
      </div>
      <div className="edit-btns">
        <ExitButton>Cancel</ExitButton>
        <SubmitButton>Save and Update</SubmitButton>
      </div>
    </EditorContainer>
  );
};
