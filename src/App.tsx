import React, { useState } from "react";
import PetList from "./components/PetList";
import ToggleButton from "./components/ToggleButton";
import "./App.css";

interface Pets {
  name: string;
  age?: number;
  owner?: string;
}

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const ss: Pets[] = [
    {
      name: "Doge",
      age: 1,
      owner: "JOhn",
    },
    {
      name: "Nyan Cat",
      age: 2,
    },
    {
      name: "Piggy",
      owner: "Jane",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <ToggleButton
          state={show}
          setState={setShow}
          buttonText={show ? "hide" : "show"}
        />
        {show && (
          <>
            <h1>Pets</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                <PetList pets={pets} />
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
