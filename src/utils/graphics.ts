import { Container, Graphics } from "pixi.js";

export const generateRandomGraphics = (container: Container) => {
  const graphic = new Graphics();
  const randomColor = Math.floor(Math.random() * 0xffffff);
  const x = Math.random() * 800;
  const y = Math.random() * 600;

  graphic.beginFill(randomColor).drawCircle(x, y, 30).endFill();
  container.addChild(graphic);

  console.log("Added random graphic at", { x, y });
};
