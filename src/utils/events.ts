import { DisplayObject } from "pixi.js";

export const addPointerEvents = (object: DisplayObject) => {
  object.interactive = true;
  object.on("pointerdown", () => {
    console.log("Pointer down on", object.name || "object");
  });
  object.on("pointerup", () => {
    console.log("Pointer up on", object.name || "object");
  });
};
