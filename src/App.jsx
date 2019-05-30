import React, { Component } from 'react';
import {Block} from './style';
import Input from './Input/index';
import ShowInfo from './ShowResult/index';

export default class App extends Component {
  state = {
    rect: undefined,
    trap: undefined,
    delta: undefined,
    lower: undefined,
    upper: undefined,
    n: undefined
  };

  rectangularFunction = (low, up, n, delta) => {
    let x;
    let functioMain = 0;

    for(let i = 0; i < n; i++) {
      x = (low + (i * delta) + (delta / 2));
      if (x === 0) {
        functioMain = 1;
        continue;
      }
      functioMain = functioMain + (Math.sin(x)/x);
    }
    return (functioMain * delta);
  };

  trapezionelFunction = (low, up, n, delta) => {
    let x1, x2;
    let functio1, functio2;
    let functioMain = 0;

    for (let i = 0; i < n; i++) {
      x1 = (low + i * delta);
      x2 = (low + (i + 1) * delta);
      if (x1 === 0) {
        functio1 = 1;
      } else {
        functio1 = (Math.sin(x1) / x1);
      }
      if (x2 === 0) {
        functio2 = 1;
      } else {
        functio2 = (Math.sin(x2) / x2);
      }

      functioMain = functioMain + (functio1 + functio2) * 0.5;
    }
    return (functioMain * delta);
  };

  calculus = async (e) => {
    e.preventDefault();
    let n = +e.target.elements.fragments.value;

    if(n) {
      var low = +e.target.elements.lowest.value, up = +e.target.elements.uppest.value;
      let delta = (up - low) / n;
      var a = +this.rectangularFunction(low, up, n, delta).toFixed(3);
      var b = +this.trapezionelFunction(low, up, n, delta).toFixed(3);

      await this.setState({
        rect: a,
        trap: b,
        delta: delta,
        lower: low,
        upper: up,
        n: n,
      });

    } else {
      console.log("ERROR");
    }

  };



  render() {
    return (
      <Block>
        <Input function = {this.calculus}/>
        <ShowInfo show = {this.calculus} rectangular = {this.state.rect}
                  trapezoid = {this.state.trap} delta = {this.state.delta}
                  n = {this.state.n} upper = {this.state.upper} low = {this.state.lower}
        />
      </Block>
    );
  }
};