import React from "react";

function ToyCard({toy, toyData, setToyData, toyDataUrl}) {
  
  
  function handleDelete(id) {
    fetch(toyDataUrl+id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    setToyData(toyData.filter(theToy => theToy.id !== id))
  }

  function handleLike(toy) {
    const newLikes = toy.likes + 1
    fetch(toyDataUrl+toy.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({likes: newLikes})
    })
    // const toyIndex = toyData.findIndex(eachToy => return eachToy.id === toy.id)
    // I have no idea how to update one value in one object in a STATE array of objects!
    const newLikeToy = toyData.map(aToy => {
      if (aToy.id === toy.id) {
        return {...aToy, likes: newLikes}
      }
      return aToy
    })
    setToyData(newLikeToy)
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
      <button className="like-btn" onClick={e => handleLike(toy)}>Like {"<3"}</button>
      <button className="del-btn" onClick={e => handleDelete(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
