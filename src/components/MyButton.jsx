import React from "react";

export default function MyButton({ setHeadLine, title, setHeadLineTo }) {
  function handleOnClick() {
    setHeadLine(setHeadLineTo);
  }
  return (
    <div>
      <button onClick={handleOnClick}>{title}</button>
    </div>
  );
}
