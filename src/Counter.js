import React from 'react';
import { observer } from "mobx-react";
import store from './store';

// 컴포넌트를 observer로 감싸주어 state가 실시간으로 변경되는 것을 감지
const Counter = () => {
  const { countClass, countObject} = store

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
    </>
  )
}

export default observer(Counter)