import "./App.css";
import React, { useState } from "react";
import TimeCmp from "./CurrentTime";
import SecondPage from "./SecondPage";

let currentClass = "initial";
let redirected = false;

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;
var dragItem;
function App() {
  const [currentPosition, setCurrentPosition] = useState("Floating...");
  const [pag2Clicked, setpage2Clicked] = useState();

  if (redirected) {
    setTimeout(() => {
      inputChangeHanlder();
      let ele = document.getElementById("center");
      ele.checked = true;
    }, 0);
  }
  const inputChangeHanlder = (event) => {
    if (event?.target?.id === "lowerRight") {
      setCurrentPosition("Lower Right");
      document.getElementsByClassName(currentClass)[0].className = "new-class";
      currentClass = "new-class";
    } else {
      document.getElementsByClassName(currentClass)[0].className = "rectangle";
      redirected = false;
      currentClass = "rectangle";
      setCurrentPosition("Center");
    }
  };
  const page2clickHanlder = () => {
    setpage2Clicked(true);
  };
  const returnClickHandler = () => {
    redirected = true;
    setpage2Clicked(false);
  };
  document.onkeydown = function (evt) {
    if (evt.key === "Escape") {
      document.getElementsByClassName(currentClass)[0].style.visibility =
        "hidden";
    } else if (evt.key === "Enter") {
      document.getElementsByClassName(currentClass)[0].style.visibility =
        "visible";
    }
  };
  function dragStart(e) {
    dragItem = document.querySelector("#item");
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    active = false;
  }

  function drag(e) {
    if (active) {
      e.preventDefault();

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }

  return (
    <div>
      {!pag2Clicked && (
        <header className="header">
          <form>
            <span>Position: </span>
            <input
              type="radio"
              id="center"
              name="position"
              onChange={inputChangeHanlder}
            />
            <label htmlFor="center">Center</label>
            <input
              type="radio"
              id="lowerRight"
              name="position"
              onChange={inputChangeHanlder}
            />
            <label htmlFor="lowerRight">Lower Right</label>
          </form>
          <h3 className="header-text">
            Press ESC key to hide the window, Enter to show it again
          </h3>
          <TimeCmp />
        </header>
      )}
      {pag2Clicked && <SecondPage />}
      {!pag2Clicked && (
        <main
          className="display-area"
          id="container"
          onMouseDown={dragStart}
          onMouseUp={dragEnd}
          onMouseMove={drag}
        >
          <div className={currentClass} id="item">
            <div className="text-area">
              <span className="position-text">{currentPosition}</span>
              <p className="dragme-text">Drag me around...</p>
            </div>
          </div>
        </main>
      )}
      <footer className="footer">
        {!pag2Clicked && <p onClick={page2clickHanlder}>Go to page 2 &gt;</p>}
        {pag2Clicked && <p onClick={returnClickHandler}> &#60; Back</p>}
      </footer>
    </div>
  );
}

export default App;
