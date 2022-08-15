import "../stylesheets/Form.css";
import memesData from "../memesData";
import { useState } from "react";

const Form = () => {
  const [memes, setMeme] = useState("");

  const getMeme = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme(memesArray[randomNumber].url);
  };

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button" onClick={getMeme}>
          Get a new meme image
        </button>
      </div>
      <div className="img-container">
        <img src={memes} className="meme--image" alt="" />
      </div>
    </main>
  );
};

export default Form;
