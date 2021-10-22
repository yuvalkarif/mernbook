import { Wrapper } from "../styled/styledTheme";
import { Header } from "../header/Header";
import { SearchBar, SearchButton, SearchContainer } from "./Search.styles";
import { useState } from "react";
import { searchUser } from "../../helpers/api";
import { User } from "../../constants/interfaces";
import { SearchProfile } from "./SearchProfile";
import { SearchProfileSkeleton } from "./SearchProfileSkeleton";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [profiles, setProfiles] = useState<User[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = async () => {
    if (query !== "") {
      setIsLoading(true);
      try {
        const results = await searchUser(query);
        setProfiles(results);
      } catch (error) {}
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <Wrapper>
        <SearchContainer>
          <h1>Search</h1>
          <div>
            <SearchBar
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKey}
            />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
          </div>
          {isLoading && <SearchProfileSkeleton />}
          {profiles.length >= 1 &&
            profiles.map((profile, i) => {
              return <SearchProfile user={profile} key={profile._id} />;
            })}
        </SearchContainer>
      </Wrapper>
    </>
  );
};
