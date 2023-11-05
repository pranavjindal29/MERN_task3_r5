import "./App.css";
import React, { useState } from "react";

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);

  const calcAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }
    setAge(age);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <p>Enter your date of dirth</p>
      <input
        className="input-group p-2"
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      ></input>
      <br></br>
      <button className="btn btn-primary mt-3" onClick={calcAge}>
        Calculate Age
      </button>
      <br></br>
      <h2 className="mt-3" id="age">You are {age} years old</h2>
    </div>
  );
}

export default App;
