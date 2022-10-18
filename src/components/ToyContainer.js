import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, setToyData, toyDataUrl}) {
  
  return (
    <div id="toy-collection">{toyData.map(toy => {
      return <ToyCard key={toy.id} toy={toy} toyDataUrl={toyDataUrl} toyData={toyData} setToyData={setToyData} />
    })}</div>
  );
}

export default ToyContainer;
