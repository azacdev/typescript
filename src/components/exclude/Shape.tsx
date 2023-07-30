import React from "react";

type ShapeType = "cube" | "circle" | "triangle" | "square" | "rectangle";

type TwoDShapeType = Exclude<ShapeType, "cube">;

type ThemeType = "dark" | "light";
type ColorType = "black" | "red" | "blue" | "yellow" | "lime";

type ItemProp = {
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
};

const Shape = (props: ItemProp) => {
  const shape: ShapeType = "cube";
  const twoDsShape: TwoDShapeType = "circle";

  return <div>Shape</div>;
};

export default Shape;
