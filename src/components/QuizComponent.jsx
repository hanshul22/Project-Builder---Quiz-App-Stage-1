import React, { Component } from "react";

export default class QuizComponent extends Component {
  render() {
    return (
      <div className="second">
        <div className="box">
          <h1>Question</h1>
          <div className="q-no">
            <strong><h4>1 of 15</h4></strong>
          </div>
          <div className="question">
            <p><b>Which is the only mammal that can jump?</b></p>
          </div>
          <div className="option-btns-1">
            <button className="btn">Dog</button>
            <button className="btn">Elephant</button>
          </div>
          <button className="btn">Goat</button>
          <button className="btn">Lion</button>
          <div>
            <button className="prev-btn" >Previous</button>
            <button className="next-btn" >Next</button>
            <button className="quit-btn" >Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
