import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import store from './store';


@inject('counter')
// 컴포넌트를 observer로 감싸주어 state가 실시간으로 변경되는 것을 감지
@observer
class Counter extends Component {
  render() {
    const {counter} = this.props;
    const {countClass, countObject} = store
    return (
      <>
        <div>
          <h1>Class</h1>
          <div>number : {countClass.number}</div>
          <button onClick={() => countClass.increase()}>plus</button>
          <button onClick={() => countClass.decrease()}>minus</button>
        </div>

        <div>
          <h1>Object</h1>
          <div>number : {countObject.num}</div>
          <button onClick={() => countObject.increase()}>plus</button>
          <button onClick={() => countObject.decrease()}>minus</button>
        </div>
        <div>
          <h1>Decorator</h1>
          <div>number : {counter.number}</div>
          <div>name : {counter.name}</div>
          <div>
            <input onChange={counter.addNick} />
          </div>
          <button onClick={counter.increase}>+1</button>
          <button onClick={counter.decrease}>-1</button>
        </div>
      </>
    )
  }
}

export default Counter