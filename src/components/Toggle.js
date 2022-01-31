import React, {useState} from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false);

  const color = isOn ? 'Red' : 'White';

  const clickHandler = () => {
    setIsOn((isOn) => !isOn )
  }

  return <button onClick={clickHandler} style={{background: color}}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
