import React, { useState } from "react";

const UseStateArray = () => {
  const biodata = [
    {
      id: 0,
      myName: "Shruti",
      age: 20,
    },
    {
      id: 1,
      myName: "Priya",
      age: 19,
    },
  ];
  const [myArray, setmyArray] = useState(biodata);
  const clearArray = () => {
    setmyArray([]);
  };
  const removeElem = (id) => {
    // alert(id);
    const myNewArray = myArray.filter((currElm) => {
      return currElm.id != id;
    });
    setmyArray(myNewArray);
  };
  return (
    <>
      {myArray.map((currElm) => {
        return (
          <h1 className="h1style">
            Name:{currElm.myName} & Age: {currElm.age}
            <button className="btn" onClick={() => removeElem(currElm.id)}>
              remove
            </button>
          </h1>
        );
      })}
      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>
  );
};
export default UseStateArray;
