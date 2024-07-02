import { Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

interface AboutProps {
  description: string;
}

const About = ({ description }: AboutProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cutoff = 300;

  const tooLong = description.length > cutoff;
  const displayDescription = isExpanded ? description : description.substring(0, cutoff) + (tooLong ? "..." : "");

  return (
    <>
      <Heading size="md">About</Heading>
      <Text dangerouslySetInnerHTML={{ __html: displayDescription }} />
      {tooLong && <Button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Read Less" : "Read More"}</Button>}
    </>
  );
};

export default About;
