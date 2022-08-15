import "../stylesheets/Form.css";
import memesData from "../memesData";

const Form = () => {
  const getMeme = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
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
    </main>
  );
};

export default Form;
