import { User } from "../../constants/interfaces";
import {
  EduIcon,
  TimeIcon,
  BirthdayIcon,
  WorkIcon,
  AboutContainer,
} from "./Profile.styles";
export const ProfileAbout = ({ about }: { about: User["about"] | any }) => {
  return (
    <>
      <AboutContainer>
        <h2>About</h2>
        {about.education && (
          <span>
            <EduIcon />
            Went to <strong>{about.education}</strong>
          </span>
        )}
        {about.work && (
          <span>
            <WorkIcon />
            Works at <strong> {about.work}</strong>
          </span>
        )}
        {about.birthday && (
          <span>
            <BirthdayIcon />
            Born <strong>{about.birthday}</strong>
          </span>
        )}
        {/* {about.birthday && (
          <span>
            <TimeIcon />
            Born {about.work}
          </span>
        )} */}
      </AboutContainer>
    </>
  );
};
