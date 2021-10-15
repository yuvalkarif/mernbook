import { useContext, useState, useRef } from "react";
import {
  WriterContainer,
  WriterProfile,
  ActionButton,
  PhotoIcon,
  PostButton,
  LinkInput,
  UploadIcon,
  TopContainer,
  LinkContainer,
} from "./PostWriter.styles";
import UserContext from "../../constants/context";
import TextareaAutosize from "react-textarea-autosize";
import { FormatListBulletedDimensions } from "@styled-icons/material-rounded/FormatListBulleted";
interface PostWriterType {
  body: string;
  picture?: string;
}
interface Image {
  src: string;
  isValid: boolean;
  isChecking: boolean;
}
export const PostWriter = () => {
  const { user } = useContext(UserContext);
  const [showLink, setShowLink] = useState<Boolean>(false);
  const [post, setPost] = useState<PostWriterType>({
    body: "",
    picture: "",
  });

  const [image, setImage] = useState<Image>({
    src: "",
    isValid: false,
    isChecking: false,
  });
  const imageCheck = () => {
    setImage({ ...image, isChecking: true });
  };

  return (
    <WriterContainer>
      <TopContainer>
        <div>
          <WriterProfile src={user?.picture} />
          <TextareaAutosize
            placeholder="Whats on your mind?"
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            value={post.body}
          />
        </div>
        {image.isChecking && (
          <img
            src={image.src}
            alt=""
            onError={() =>
              setImage({ isChecking: false, src: "", isValid: false })
            }
            onLoad={() =>
              setImage({ ...image, isChecking: true, isValid: true })
            }
          />
        )}
      </TopContainer>

      <div>
        <div>
          <ActionButton onClick={() => setShowLink(!showLink)}>
            <PhotoIcon />
            <span>Add a photo</span>
          </ActionButton>
          {showLink && (
            <LinkContainer>
              <LinkInput
                placeholder=".png, .jpg or .webp links"
                onChange={(e) => setImage({ ...image, src: e.target.value })}
                value={image.src}
              />
              <UploadIcon onClick={imageCheck} />
            </LinkContainer>
          )}
        </div>

        <PostButton onClick={() => console.log(post)}>Post</PostButton>
      </div>
    </WriterContainer>
  );
};
