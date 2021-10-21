import { Wrapper } from "../styled/styledTheme";
import { Header } from "../header/Header";
import { SearchBar, SearchButton, SearchContainer } from "./Search.styles";
import { useState } from "react";
import { searchUser } from "../../helpers/api";

export const Search = () => {
  const [query, setQuery] = useState("");
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = async () => {
    if (query !== "") {
      try {
        const results = await searchUser(query);
        console.log(results);
      } catch (error) {}
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
        </SearchContainer>
      </Wrapper>
    </>
  );
};
