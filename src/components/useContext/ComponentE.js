import React, { useContext } from "react";
// import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "./ContexProvider";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {" "}
      User isES {user} and channel is {channel}
    </div>
  );
}

export default ComponentE;
