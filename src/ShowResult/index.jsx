import React, {Component} from 'react';
import {Container} from './style';

export default class Show extends Component {
    render(){
        return (
          <Container>
              {this.props.trapezoid && this.props.rectangular ? <div>
                    <div className="rect">
                        <p>Метод интегрирования прямоугольником: </p>
                        <p>Площадь: {this.props.rectangular}</p>
                        <p>Шаг: {this.props.delta}</p>
                    </div>
                    <div>
                        <p>Метод интегрирования трапецией: </p>
                        <p>Площадь: {this.props.trapezoid}</p>
                    </div>
              </div>
              :
              <div>
                  <p>Введите значение</p>
              </div>
              }
          </Container>
        );
    }
};