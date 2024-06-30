import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

interface SkeletonListItemProps {
  size?: string;
}

const SkeletonListItem = ({ size }: SkeletonListItemProps) => {
  return (
    <ListItem paddingY={2}>
      <HStack>
        <Skeleton boxSize={size || "32px"} />
        <SkeletonText noOfLines={2} width="100%" />
      </HStack>
    </ListItem>
  );
};

export default SkeletonListItem;
