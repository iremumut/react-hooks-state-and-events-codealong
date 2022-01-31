import React, {useState} from "react";

function Toggle() {

  const [btnName, SetBtnName] = useState('OFF');

  const clickHandler = () => {
      SetBtnName( (prevName) => {
        if(prevName =='OFF') return 'ON';
        else return 'OFF'
      });
  }

  return <button onClick={clickHandler}>{btnName}</button>;
}

export default Toggle;
