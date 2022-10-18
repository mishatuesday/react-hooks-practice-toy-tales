import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData}) {
  return (
    <div id="toy-collection">{toyData.map(toy => {
      return <ToyCard key={toy.id} toy={toy} />
    })}</div>
  );
}

export default ToyContainer;
