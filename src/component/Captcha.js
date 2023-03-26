import React, { useState } from "react";
import "./captcha.css";

const Captcha = () => {
  const [challenge, setChallenge] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [valid, setValid] = useState(false);

  const generateCaptcha = () => {
    const challenges = [
      "What is 2+2?",
      "What is the capital of France?",
      "What is the name of the 7th planet from the sun?",
      "What is 9 + 8?",
      "What color is the sky?",
    ];
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const newChallenge = challenges[randomIndex];
    setChallenge(newChallenge);

    const evalResult = newChallenge.includes("author")
      ? "Harper"
      : newChallenge.includes("capital of France")
      ? "Paris"
      : newChallenge.includes("7th planet")
      ? "Uranus"
      : newChallenge.includes("9 + 8")
      ? "17"
      : newChallenge.includes("color of the sky")
      ? "Blue"
      : "";
    setResult(evalResult);
    setValid(false);
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
    setValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === result.toLowerCase()) {
      console.log("Captcha passed");
      setValid(true);
    } else {
      console.log("Captcha failed");

      setValid(false);
    }
  };

  return (
    <div className="form-container">
      <section className="form-section">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label> <br />
          <input type="text" id="name" required /> <br />
          <label htmlFor="email">Email:</label> <br />
          <input type="email" id="email" required /> <br />
          <label htmlFor="mobile">Mobile Number:</label> <br />
          <input type="tel" id="mobile" required /> <br />
          <h2 className="captcha-challenge">{challenge}</h2>
          <label htmlFor="answer">Answer:</label> <br />
          <input
            type="text"
            id="answer"
            className="answer"
            value={answer}
            onChange={handleChange}
          />
          <button type="submit" className="submitbtn">
            Submit
          </button>
        </form>
        <button onClick={generateCaptcha}>New Captcha</button>
        {valid && <p>Captcha passed!</p>}
      </section>
    </div>
  );
};

export default Captcha;
