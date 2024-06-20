import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card width={300} borderRadius={10} overflow="hidden">
      <Skeleton height={200} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
