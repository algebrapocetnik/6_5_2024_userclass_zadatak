import { useState } from "react";

export default function UserProfile({ firstname, lastname }) {
  const [name, setName] = useState(firstname);
  const [surname, setSurname] = useState(lastname);
  const [age, setAge] = useState(null);
  const [points, setPoints] = useState(null);

  return (
    <>
      <p>
        Firstname: <b>{name}</b>
      </p>
      <input value={name} onChange={(e) => e.target.value}></input>
      <br></br>
      <p>
        Lastname: <b>{surname}</b>
      </p>

      <input value={lastname} onChange={(e) => e.target.value}></input>
      <p>
        Age: <b>{age}</b>
      </p>
      <input
        type="number"
        min={0}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <p>
        Points: <b>{points}</b>
      </p>
      <input
        type="number"
        min={0}
        onChange={(e) => setPoints(e.target.value)}
      ></input>
    </>
  );
}
