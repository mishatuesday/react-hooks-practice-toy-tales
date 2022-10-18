import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const toyDataUrl="http://localhost:3001/toys/"
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([])

  useEffect(() => {
    fetch(toyDataUrl)
    .then(r => r.json())
    .then(data => setToyData(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm toyData={toyData} setToyData={setToyData} toyDataUrl={toyDataUrl} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>{showForm ? "^ hide form ^" : "Add a Toy"}</button>
      </div>
      <ToyContainer toyDataUrl={toyDataUrl} setToyData={setToyData} toyData={toyData} />
    </>
  );
}

export default App;
