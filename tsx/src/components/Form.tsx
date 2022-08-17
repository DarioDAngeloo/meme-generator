import "../stylesheets/Form.css";
import { useState, useEffect } from "react";

const Form = () => {
  // 1# first state to determine basic propertys as objects

  const [memes, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // 2# second state

  const [allMemeImages, setAllMemeImages] = useState<any[]>([]);

  // when someone clicks on the button
  //

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  //

  const getMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((e) => ({
      ...e,
      randomImage: url,
    }));
  };

  // listener to inputs texts
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  // return section to DOM

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          name="topText"
          placeholder="Top text"
          value={memes.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          name="bottomText"
          placeholder="Bottom text"
          value={memes.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMeme}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={memes.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{memes.topText}</h2>
        <h2 className="meme--text bottom">{memes.bottomText}</h2>
      </div>
    </main>
  );
};

export default Form;
