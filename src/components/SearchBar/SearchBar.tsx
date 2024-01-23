import { FC } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchBarProps {
  searchedValue: string;
  setSearchedValue: (text: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchedValue, setSearchedValue }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        color={"#fff"}
        type="text"
        placeholder="Search Game"
        value={searchedValue}
        onChange={(e) => setSearchedValue(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
