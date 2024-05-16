import React, { useState, useEffect } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <div>
        {allEntry.map((currElem) => {
          return (
            <div className="showDataStyles">
              <p>{currElem.email}</p> <br />
              <p>{currElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BasicForm;
