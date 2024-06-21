import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="logo" boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
