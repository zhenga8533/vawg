import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="logo" boxSize={"60px"} />
      <SearchInput />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
