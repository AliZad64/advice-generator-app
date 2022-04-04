import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import axios from "axios";
import "../styles/app.scss";
function App() {
  const [advice, setAdvice] = useState();
  useEffect(async () => {
    await axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onhandle = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {advice ? (
        <div className="container">
          <div className="App">
            <div className="advice-card">
              {/* Advice #<!-- Advice ID goes here --> */}
              <div className="advice-title">
                <p>ADVICE</p>
                <p>#{advice.id}</p>
              </div>
              <div className="advice-quote">
                <span>{advice.advice}</span>
              </div>
              <div className="advice-divider">
                <MediaQuery maxWidth={700}>
                  <img src="../images/pattern-divider-mobile.svg" />
                </MediaQuery>
                <MediaQuery minWidth={700}>
                  <img src="../images/pattern-divider-desktop.svg" />
                </MediaQuery>
              </div>
              <button onClick={onhandle}>
                <img src="../images/icon-dice.svg" />
              </button>
            </div>
          </div>
          <div className="attribution">
            Challenge by{" "}
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
              Frontend Mentor
            </a>
            . Coded by
            <a href="#">Your Name Here</a>.
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
