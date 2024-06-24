import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card width={600}>
      <Skeleton height={200} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
