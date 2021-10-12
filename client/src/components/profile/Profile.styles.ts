import styled from "styled-components";

export const ProfilePicBig = styled.img`
  border-radius: 100%;
  max-width: 168px;
  border: 0.3rem solid ${({ theme }) => theme.containerBg};
`;

export const HeaderContainer = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    p {
      margin: 0;
    }
    padding-bottom: 1em;
    border-bottom: 1px solid ${({ theme }) => theme.btnBg};
  }
  background: linear-gradient(
      to top,
      rgb(36, 37, 38),
      rgb(36, 37, 38),
      rgb(36, 37, 38),
      rgba(36, 37, 38, 0.9),
      rgba(36, 37, 38, 0.7),
      rgba(36, 37, 38, 0.4),
      rgba(36, 37, 38, 0)
    ),
    ${({ theme }) => theme.btnBg};
`;
export const BarContainer = styled.div`
  background-color: ${({ theme }) => theme.containerBg};
  & > div {
    &:first-child {
      display: flex;
      justify-content: space-between;

      span {
        padding: 1rem;
        display: inline-block;
        font-weight: 600;
        font-size: 0.9rem;
        background-color: ${({ theme }) => theme.containerBg};
        border-radius: 0.3rem;

        &:hover {
          cursor: pointer;
          filter: brightness(110%);
        }
      }
    }
  }
`;
