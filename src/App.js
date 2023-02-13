import { useState } from "react";
import heart from "./images/heart.png";

function App() {
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);

  return (
    <div className="App">
      {!show ? (
        <div className="question">
          <span>Are You Love Me?</span>
          <div className="button-container">
            <button className="button no">No</button>
            <button className="button yes" onClick={() => setShow(true)}>
              Yes
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="answer">
            <span>
              I Love{" "}
              {!change ? (
                <span onClick={() => setChange(true)}>Me</span>
              ) : (
                "You"
              )}{" "}
              Too
            </span>
            {change && <img src={heart} />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
