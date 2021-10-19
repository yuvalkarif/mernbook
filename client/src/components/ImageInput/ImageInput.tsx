import { useState } from "react";

import {
  LinkContainer,
  UploadIcon,
  ProfilePicBig,
  LinkInput,
} from "./ImageInput.styles";

export const ImageInput = () => {
  const [image, setImage] = useState({
    src: "",
    isValid: false,
    isShowing: false,
  });
  return (
    <>
      {image.isShowing && (
        <ProfilePicBig
          style={{ display: !image.isValid ? "none" : "block" }}
          src={image.src}
          alt=""
          onError={() =>
            setImage({ isShowing: false, src: "", isValid: false })
          }
          onLoad={() => setImage({ ...image, isShowing: true, isValid: true })}
        />
      )}
      {
        <LinkContainer>
          <LinkInput
            placeholder=".png, .jpg or .webp links"
            onChange={(e) => setImage({ ...image, src: e.target.value })}
            value={image.src}
          />
          <UploadIcon onClick={() => setImage({ ...image, isShowing: true })} />
        </LinkContainer>
      }
    </>
  );
};
