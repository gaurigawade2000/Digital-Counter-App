import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Increment, Decrement, Zero } from '../feature/counterSlice';
import '../main.css';


function Main() {
  let dispatch = useDispatch();
  let count = useSelector((state) => state.counter.count);
  let handleCount = (value) => {
    value === "Increment" ? dispatch(Increment()) : dispatch(Decrement());
  }
  let setZero = () => {
    dispatch(Zero());
  }
  return (
    <>
      <div className="main">
        <h1>Digital Counter</h1>
        <div className="first">
          <input type="text" value={count} readOnly></input>
        </div>
        <div className="second">
          <button type="submit" onClick={() => handleCount("Increment")} className="IncButton">+</button>
          <button type="submit" onClick={() => handleCount("Decrement")} className="DecButton">-</button>
          <button type="submit" onClick={setZero} >0</button>
        </div>
      </div>
    </>
  )
}
export default Main;
