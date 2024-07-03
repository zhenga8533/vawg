import { Heading } from "@chakra-ui/react";
import ExpandableText from "../../general/ExpandableText";

interface AboutProps {
  description: string;
}

const About = ({ description }: AboutProps) => {
  return (
    <>
      <Heading size="md">About</Heading>
      <ExpandableText cutoff={300} text={description} />
    </>
  );
};

export default About;
