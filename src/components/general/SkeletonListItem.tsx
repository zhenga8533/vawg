import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonListItem = () => {
  return (
    <ListItem paddingY={2}>
      <HStack>
        <Skeleton boxSize="32px" />
        <SkeletonText noOfLines={2} width="100px" />
      </HStack>
    </ListItem>
  );
};

export default SkeletonListItem;
