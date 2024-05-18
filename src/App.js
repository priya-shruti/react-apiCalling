import React, { useState } from "react";
import "./App.css";
// import RulesHooks from "./component/rulesHooks";
// import UseStateArray from "./component/UseStateArray";
// import BasicForm from "./component/forms/basicForm";
import UseEffectAPI from "./component/forms/useEffect/useEffectAPI";

const App = () => {
  // const [myName, setMyName] = useState("thapa technical");

  // const changeName = () => {
  //   let val = myName;
  //   if (val === "thapa technical") {
  //     setMyName("vinod thapa");
  //   } else {
  //     setMyName("thapa technical");
  //   }
  // };
  return (
    <div>
      {/* <RulesHooks /> */}
      {/* <UseStateArray /> */}
      {/* <BasicForm /> */}
      <UseEffectAPI />
    </div>
  );
};
export default App;
