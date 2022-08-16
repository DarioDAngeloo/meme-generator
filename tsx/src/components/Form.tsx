import "../stylesheets/Form.css";
import memesData from "../memesData";
import { useState } from "react";

const Form = () => {
  // 1# first state to determine basic propertys as objects

  const [memes, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // 2# second state

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  // when someone clicks on the button

  const getMeme = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((e) => ({
      ...e,
      randomImage: url,
    }));
  };

  // return section to DOM

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
        <img src={memes.randomImage} className="meme--image" alt="" />
      </div>
    </main>
  );
};

export default Form;
