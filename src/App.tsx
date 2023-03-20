import React, { useState } from 'react';
import PetList from './components/PetList'
import './App.css';

const App = () => {
  const [show, setShow] = useState(false)
  const pets = [
    { 
      name: "Doge",
      age: 1,
      owner: "JOhn"
    },
    {
      name: "Nyan Cat",
      age: 2
    },
    {
      name: "Piggy",
      owner: "Jane"
    }
  ]

  return (
    <div className="App">
      <div className='container'>
        <button onClick={() => { setShow(!show) }}>Show Pets</button>
        { show && (
          <>
            <h1>Pets</h1>
              <table>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Owner</th>
              </tr>
              <PetList pets={pets} />
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
