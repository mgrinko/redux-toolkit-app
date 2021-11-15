import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: 'dec' })}>--</button>
      {count}
      <button onClick={() => dispatch({ type: 'inc' })}>++</button>
    </div>
  );
}

export default App;
