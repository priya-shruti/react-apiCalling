import React, { useState } from "react";

const RulesHooks = () => {
  const [myName, setMyName] = useState("thapa technical");

  return (
    <div>
      <h1>{myName}</h1>
    </div>
  );
};
export default RulesHooks;
