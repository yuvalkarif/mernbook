import { User } from "../../constants/interfaces";
import {
  EditorContainer,
  InputEdit,
  SubmitButton,
  ExitButton,
  EditorWrapper,
} from "./Profile.styles";
import { ImageInput } from "../ImageInput/ImageInput";
import TextareaAutosize from "react-textarea-autosize";
import { BirthdayIcon, WorkIcon, EduIcon } from "./Profile.styles";
import React, { useEffect, useState } from "react";
import { updateUser } from "../../helpers/api";
import { useDetectClickOutside } from "react-detect-click-outside";
import { format } from "date-fns";
import { formatDate } from "../../helpers/date";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const ProfileEditor = ({
  user,
  setEdit,
}: {
  user: User;
  setEdit: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [editUser, setEditUser] = useState({
    summary: user.about?.summary,
    work: user.about?.work,
    education: user.about?.education,
    birthday: user.about?.birthday,
  });
  const [picture, setPicture] = useState(user.picture);
  const [startDate, setStartDate] = useState(new Date());
  const containerRef = useDetectClickOutside({
    onTriggered: () => setEdit(false),
  });
  useEffect(() => {
    console.log("ProfileEditor");
  });
  const handleSubmit = async () => {
    try {
      await updateUser({ id: user._id, picture: picture, ...editUser });
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsDate) {
      setEditUser({ ...editUser, birthday: e.target?.valueAsDate });
    }
  };
  return (
    <EditorWrapper>
      <EditorContainer ref={containerRef}>
        <h2>Edit Profile</h2>
        <h3>Profile Picture</h3>
        <ImageInput picture={picture} setPicture={setPicture} />
        <h3>Summary</h3>
        <TextareaAutosize
          value={editUser.summary}
          onChange={(e) =>
            setEditUser({ ...editUser, summary: e.target.value })
          }
        />
        <h3>About</h3>
        <div className="edit-about">
          <span>
            <WorkIcon />
            <p>Works at</p>
            <InputEdit
              type="text"
              value={editUser.work}
              onChange={(e) =>
                setEditUser({ ...editUser, work: e.target.value })
              }
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
              type="date"
              value={format(editUser?.birthday || new Date(), "yyyy-mm-dd")}
              onChange={handleDate}
            />
          </span>
        </div>
        <div className="edit-btns">
          <ExitButton onClick={() => setEdit(false)}>Cancel</ExitButton>
          <SubmitButton onClick={handleSubmit}>Save and Update</SubmitButton>
        </div>
      </EditorContainer>
    </EditorWrapper>
  );
};
