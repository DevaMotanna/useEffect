import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onClickListener = () => {
    setX(x + 1);
  };

  const onClickListenerx = () => {
    setY(y + 1);
  };

  useEffect(
    function () {
      document.title = "You Clicked X " + x + " times";
    },
    [x]
  );

  useEffect(
    function () {
      document.title = "You Clicked Y " + y + " times";
    },
    [y]
  );

  return (
    <div>
      <h1>Count X : {x} </h1>
      <h1>Count Y : {y}</h1>
      <button onClick={onClickListener}>Increment X</button>
      <button onClick={onClickListenerx}>Increment Y</button>
    </div>
  );
};
