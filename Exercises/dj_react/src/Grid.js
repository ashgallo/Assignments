import React, { Component, createRef } from 'react';
import audioClip from "./assets/audio/Pen_Clicks-Simon_Craggs-514025171.mp3";

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      box1: "white",
      box2: "white",
      box3: "white",
      box4: "white"
    }
    this.audio = createRef();
    this.blackWhite = this.blackWhite.bind(this);
    this.purple = this.purple.bind(this);
    this.blueLeft = this.blueLeft.bind(this);
    this.blueRight = this.blueRight.bind(this);
    this.lavender1 = this.lavender1.bind(this);
    this.pink2 = this.pink2.bind(this);
    this.grey3 = this.grey3.bind(this);
    this.teal4 = this.teal4.bind(this);
  }
  blackWhite() {
    this.setState({
      box1: "black",
      box2: "black",
      box3: "black",
      box4: "black"
    })
  }
  purple() {
    this.audio.current.play();
    this.setState(prevState => ({
      box1: prevState.box1 = "purple",
      box2: prevState.box2 = "purple",
    }))
  }
  blueLeft() {
    this.setState(prevState => ({
      box3: prevState.box3 = "blue"
    }))
  }
  blueRight() {
    this.setState(prevState => ({
      box4: prevState.box4 = "blue"
    }))
  }
  lavender1() {
    this.setState(prevState => ({
      box1: prevState.box1 = "lavender"
    }))
  }
  pink2() {
    this.setState(prevState => ({
      box2: prevState.box2 = "pink"
    }))
  }
  grey3() {
    this.setState(prevState => ({
      box3: prevState.box3 = "gray"
    }))
  }
  teal4() {
    this.setState(prevState => ({
      box4: prevState.box4 = "teal"
    }))
  }
  render() {
    const styles = {
      styles1: {
        backgroundColor: this.state.box1
      },
      styles2: {
        backgroundColor: this.state.box2
      },
      styles3: {
        backgroundColor: this.state.box3
      },
      styles4: {
        backgroundColor: this.state.box4
      }
    }
    return (
      <div>
        <div className="grid">
          <div className="box" style={styles.styles1}>1</div>
          <div className="box" style={styles.styles2}>2</div>
          <div className="box" style={styles.styles3}>3</div>
          <div className="box" style={styles.styles4}>4</div>
        </div>
        <div className="button-grid">
          <button className="black-white" onClick={this.blackWhite}>Black or White</button>
          <audio ref={this.audio} src={audioClip} type="audio/mp3"></audio>
          <button className="purple" onClick={this.purple}>Purple</button>
          <button className="blue-left" onClick={this.blueLeft}>Blue Left</button>
          <button className="blue-right" onClick={this.blueRight}>Blue Right</button>
          <button className="lavender1" onClick={this.lavender1}>Lavender</button>
          <button className="pink2" onClick={this.pink2}>Pink</button>
          <button className="grey3" onClick={this.grey3}>Grey</button>
          <button className="teal4" onClick={this.teal4}>Teal</button>
        </div>
      </div>
    )
  }
}

export default Grid;