import React from "react";
import "./SecondPage.css";

const SecondPage = () => {
  return (
    <React.Fragment>
      <navbar className="nav">
        <p>Page 2</p>
        <a href="https://react-hhtp28.web.app/" className="about-me">
          More about me
        </a>
      </navbar>
      <article>
        <header className="intro">
          Hello 👋, My name is Jay Shah. Currently I am working as a Frontend
          Developer and I have a deep interest in Javascript and React JS. I
          love to go deep in Javascript's concepts.
        </header>
        <main>
          <p className="txt"> As an example,</p>
          <p className="que">
            Do you know how array are internally created? We are using the array
            properties like concate, map, filter etc. But how they are getting
            this methods?
          </p>
          <p className="ans">
            You can check the answer here:
            <a href="https://www.linkedin.com/posts/sh-jay_javascript-array-prototype-activity-6951547190049677312-Dqbn?utm_source=share&utm_medium=member_desktop">
              Answer &#8594;
            </a>
          </p>
        </main>
      </article>
    </React.Fragment>
  );
};

export default SecondPage;
