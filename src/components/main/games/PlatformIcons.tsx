import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Info } from "../../../hooks/useData";

interface PlatformIconsProps {
  platforms: Info[];
}

const PlatformIcons = ({ platforms }: PlatformIconsProps) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
  };

  return (
    <HStack marginY={1}>
      {platforms?.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" fontSize="xl" />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
