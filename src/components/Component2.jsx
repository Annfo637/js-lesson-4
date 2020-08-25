import React from "react";
import MyButton from "./MyButton";

export default function Component2({ setHeadLine }) {
  return (
    <div>
      Component2
      <MyButton
        title="Sätt headline från C2"
        setHeadLine={setHeadLine}
        setHeadLineTo="Headline från C2"
      />
    </div>
  );
}
