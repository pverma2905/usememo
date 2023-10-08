import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [add, setAdd] = useState(0);
  const [subtract, setSubtract] = useState(10);

  const multi = useMemo(
    function multiply() {
      console.log("test")
      return add * 10;
    }, [add])



  return (
    <>
      {/* <h1>{multiply()}</h1> */}
      <h1>{multi}</h1>
      <h1>Memo Add {add}</h1>
      <h1>Memo Subtract {subtract}</h1>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <button onClick={() => setSubtract(subtract - 1)}>Subtract</button>
    </>
  );
}

export default App;
