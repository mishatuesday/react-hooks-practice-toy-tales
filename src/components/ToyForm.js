import React, {useState} from "react";

function ToyForm({setToyData, toyDataUrl, toyData}) {
  // set form state YES only the form has to know what's in the fields.
  // useEffect to POST or just have an event listener that calls POST?
  // must render new ToyCard, which will happen when setToyData changes state in App
  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")
  
  function handleForm(e) {
    e.preventDefault()
    const newToy = {
      // id: toyData.length + 1, // this is a problem because once you delete toys the ids will get duplicated
      name: newName,
      image: newImage,
      likes: 0
    }
    // make POST request to toyDataUrl
    fetch(toyDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newToy)}
    )
    .then(r => r.json())
    .then(r => setToyData([...toyData, {
      id: r.id,
      name: newName,
      image: newImage,
      likes: 0
    }]))
    // set toyData
    // setToyData([...toyData, newToy])
    setNewName("")
    setNewImage("")
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={e => handleForm(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newImage}
          onChange={e => setNewImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
