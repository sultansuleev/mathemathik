import React, {Component} from 'react';
import {Container} from './style';

export default class InputVal extends Component {
    render() {
        return (
          <Container>
              <form onSubmit = {(e) => {this.props.function(e)}}>
                  <input type="number" name = "lowest" placeholder="Введите наименьший отрезок" autoFocus/>
                  <input type="number" name = "uppest" placeholder="Введите наибольший отрезок"/>
                  <input type="number" name = "fragments" placeholder="Введите количество фрагментов"/>
                  <button>Вычислить</button>
                  <h1>Suleev Enterprise & Co.</h1>
              </form>

          </Container>
        );
    }
}