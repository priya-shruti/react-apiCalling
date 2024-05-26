import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems(...items, inputData);
      setInputData("");
    }
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <p>Add Your List Here</p>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem">
                  <h3>{elem}</h3>
                  <i className="fa fa-trash add-btn" title="Delete Item"></i>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>REMOVE LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
