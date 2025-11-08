import { useState } from "react";
import { SearchWrapper, StyledInput, Icon } from "./search.styled";
import "boxicons/css/boxicons.min.css";

const Search = ({ value, onChange }) => {
  const [focused, setFocused] = useState(false);

  return (
    <SearchWrapper style={{ position: "relative" }}>
      <Icon
        className="bx bx-search"
        style={{
          color: focused ? "#ffffff" : "#cbd5e1",
        }}
      />
      <StyledInput
        type="text"
        placeholder="Search cryptos"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </SearchWrapper>
  );
};

export default Search;
