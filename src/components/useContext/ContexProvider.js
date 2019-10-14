import React, { createContext } from "react";
import ComponentC from "./ComponentC";

export const UserContext = createContext();
export const ChannelContext = createContext();

function ContexProvider() {
  return (
    <div className="ContexProvider">
      <UserContext.Provider value={"VishwasA"}>
        <ChannelContext.Provider value={"CodevolutionA"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ContexProvider;
