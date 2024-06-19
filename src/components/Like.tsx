import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [status, setStatus] = useState(false);

  if (!status)
    return <AiFillHeart color="red" onClick={() => setStatus(true)} />;
  else return <AiOutlineHeart color="red" onClick={() => setStatus(false)} />;
};

export default Like;
