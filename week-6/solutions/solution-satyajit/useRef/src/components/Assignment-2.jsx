import { useState, useRef } from "react";

const Assignment2 = () => {
  const [count, setCount] = useState(0);
  const numberOfTimesRendered = useRef(0);

  const handleRender = () => {
    setCount((c) => c + 1);
  };

  console.log(count);

  numberOfTimesRendered.current = numberOfTimesRendered.current + 1;

  return (
    <>
      <p>This component has rendered {numberOfTimesRendered.current} times</p>
      <button onClick={handleRender}>Force Re-Render</button>
    </>
  );
};

export default Assignment2;
