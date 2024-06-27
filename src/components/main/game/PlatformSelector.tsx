import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../../../hooks/useGame";
import usePlatforms from "../../../hooks/usePlatforms";
import getStyle from "../../../services/select-style";

export interface PlatformSelectorProps {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: PlatformSelectorProps) => {
  const { results } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Parent Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem {...getStyle(undefined, selectedPlatform?.id)} key={0} onClick={() => onSelectPlatform(null)}>
          Any Parent Platform
        </MenuItem>
        {results.map((parentPlatform) => (
          <MenuItem
            {...getStyle(parentPlatform.id, selectedPlatform?.id)}
            key={parentPlatform.id}
            onClick={() => onSelectPlatform(parentPlatform)}
          >
            {parentPlatform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
