import { useState } from "react";
import heart from "./images/heart.png";

function App() {
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);
  const [answer, setAnswer] = useState(false);

  const handleNoButton = () => {
    setShow(true);
    setAnswer(false);
  };

  const handleYesButton = () => {
    setShow(true);
    setAnswer(true);
  };

  return (
    <div className="App">
      {!show ? (
        <div className="question">
          <span>Do You Love Me?</span>
          <div className="button-container">
            <button className="button no" onClick={() => handleNoButton()}>
              No
            </button>
            <button className="button yes" onClick={() => handleYesButton()}>
              Yes
            </button>
          </div>
        </div>
      ) : (
        <>
          {!answer ? (
            <div className="answer">
              <span>Same</span>
            </div>
          ) : (
            <div className="answer">
              <span>
                I Love{" "}
                {!change ? (
                  <span
                    onClick={() => setChange(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Me
                  </span>
                ) : (
                  "You"
                )}{" "}
                Too
              </span>
              {change && <img src={heart} alt="love" />}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
