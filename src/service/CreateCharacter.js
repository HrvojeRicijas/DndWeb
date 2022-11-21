import React, { useState } from "react";
import Axios from "axios";
import "../css/app.css";
import "../css/character-sheet.css";
import ClassesDropdown from "../Components/ClassesDropdown";

function CreateCharacter() {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [classId, setClassId] = useState("");
  const [level, setLevel] = useState("");
  const [creatorId, setCreatorId] = useState("");
  const [campaignId, setCampaignId] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const submitPost = () => {
    Axios.post("http://localhost:3002/api/characters/create", {
      name: name,
      race: race,
      classId: classId,
      level: level,
      creatorId: creatorId,
      campaignId: campaignId,
      description: description,
      image: image,
    });
  };

  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0].name);
    setImage(event.target.files[0].name);
  };

  const getClassDropdown = (selectedClass) => {
    setClassId(selectedClass);
    console.log(selectedClass);
  };

  return (
    <div className="create-container">
      <span className="formTitle">Create a character:</span>
      <label>Name: </label>
      <input
        className="create-input"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label>Race: </label>
      <input
        className="create-input"
        type="text"
        onChange={(e) => {
          setRace(e.target.value);
        }}
      />

      <label>Class: </label>
      <ClassesDropdown onClassFetch={getClassDropdown} />

      <label>Level: </label>
      <input
        className="create-input"
        type="number"
        onChange={(e) => {
          setLevel(e.target.value);
        }}
      />

      <label>Creator:</label>
      <input
        className="create-input"
        type="number"
        onChange={(e) => {
          setCreatorId(e.target.value);
        }}
      />

      <label>Campaign: </label>
      <input
        className="create-input"
        type="number"
        onChange={(e) => {
          setCampaignId(e.target.value);
        }}
      />

      <label>Description: </label>
      <textarea
        className="create-input"
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <label>Image: </label>
      <input
        className="create-file"
        type="file"
        accept="image/*"
        onChange={fileSelectedHandler}
      />

      <button onClick={submitPost} className="create-button">Create</button>
    </div>
  );
}

export default CreateCharacter;
