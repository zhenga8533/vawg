import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  cutoff: number;
  text: string;
}

const ExpandableText = ({ cutoff, text }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const tooLong = text.length > cutoff;
  const displayDescription = isExpanded ? text : text.substring(0, cutoff) + (tooLong ? "..." : "");

  return (
    <>
      <Text dangerouslySetInnerHTML={{ __html: displayDescription }} />
      {tooLong && <Button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Read Less" : "Read More"}</Button>}
    </>
  );
};

export default ExpandableText;
