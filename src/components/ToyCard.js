import React from "react";

function ToyCard({toy, toyData, setToyData, toyDataUrl}) {
  

  function handleDelete(id) {
    console.log(`ToyCard handleDelete URL:${toyDataUrl}${id}`)
    fetch(toyDataUrl+id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    setToyData(toyData.filter(theToy => theToy.id !== id))
  }

  return (
    <div className="card">
      <h2>{toy.name} {toy.id}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={e => handleDelete(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
