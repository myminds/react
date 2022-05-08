import { Provider } from "react-redux";

import store from "./store/store";


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './reducer/counterReducer'



function App() {
  return (
    <div className="App">
     <Provider store={store}>
        <Counter />
     </Provider>
    </div>
  );
}

export default App;




 function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>



        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(33))}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}