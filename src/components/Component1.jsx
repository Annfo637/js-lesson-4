import React from "react";
import MyButton from "./MyButton";

export default function Component1({ setHeadLine }) {
  return (
    <div>
      Component1
      <MyButton
        title="Sätt headline från C1"
        setHeadLine={setHeadLine}
        setHeadLineTo="Headline från C1"
      />
    </div>
  );
}
