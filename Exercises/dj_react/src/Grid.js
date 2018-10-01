import React, { Component } from 'react';
import './styles.css';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      box1: "white",
      box2: "white",
      box3: "white",
      box4: "white"
    }
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
    this.setState(prevState => ({
      box1: prevState.box1 = "black",
      box2: prevState.box2 = "black",
      box3: prevState.box3 = "black",
      box4: prevState.box4 = "black"
    }))
  }
  purple() {
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
    const { change } = this.state;
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
    return(
      <div>
        <div class="grid">
          <div class="box" style={ styles.styles1 }>1</div>
          <div class="box" style={ styles.styles2 }>2</div>
          <div class="box" style={ styles.styles3 }>3</div>
          <div class="box" style={ styles.styles4 }>4</div>
        </div>
        <div class="button-grid">
          <button class="black-white" onClick={this.blackWhite}>Black or White</button>
          <button class="purple" onClick={this.purple}>Purple</button>
          <button class="blue-left" onClick={this.blueLeft}>Blue Left</button>
          <button class="blue-right" onClick={this.blueRight}>Blue Right</button>
          <button class="lavender1" onClick={this.lavender1}>Lavender</button>
          <button class="pink2" onClick={this.pink2}>Pink</button>
          <button class="grey3" onClick={this.grey3}>Grey</button>
          <button class="teal4" onClick={this.teal4}>Teal</button>
        </div>
      </div>
    )
  }
}




export default Grid;