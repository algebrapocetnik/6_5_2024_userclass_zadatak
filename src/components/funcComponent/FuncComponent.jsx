import { useState } from "react";

function FuncComponent() {
  const [word, setWord] = useState("");

  function handleInputChange(e) {
    setWord(e.target.value);
  };

  return (
    <>
      <p>Moja najdraza rijec je: {word} </p>
      <input onChange={handleInputChange}></input>
    </>
  );
}

export default FuncComponent;