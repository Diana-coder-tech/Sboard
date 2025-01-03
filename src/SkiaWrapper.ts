import * as PIXI from "pixi.js";

type CustomShapes = "POLY" | "RECT";
type ExtendedShapes = PIXI.SHAPES | CustomShapes;

interface Polygon {
  type: "POLY";
  points: number[];
}

interface Rectangle {
  type: "RECT";
  x: number;
  y: number;
  width: number;
  height: number;
}

type IShape = Polygon | Rectangle | PIXI.IShape;

class SkiaWrapper {
  private skiaContext: any; // Здесь замените на реальный тип SkiaContext

  constructor(skiaContext: any) {
    this.skiaContext = skiaContext;
  }

  drawShape(shape: IShape) {
    switch (shape.type) {
      case "POLY":
        this.skiaContext.drawPoly((shape as Polygon).points);
        break;
      case "RECT":
        const rect = shape as Rectangle;
        this.skiaContext.drawRect(rect.x, rect.y, rect.width, rect.height);
        break;
      default:
        console.warn(`Shape type ${shape.type} is not supported.`);
    }
  }

  renderContainer(container: PIXI.Container) {
    // Пример реализации — отрисовка всех объектов внутри контейнера
    container.children.forEach((child) => {
      if (child instanceof PIXI.Graphics) {
        // Логика обработки графических объектов
      } else if (child instanceof PIXI.Sprite) {
        const texture = child.texture;
        const bounds = child.getBounds();
        this.drawImage(texture, bounds.x, bounds.y, bounds.width, bounds.height);
      }
    });
  }  

  drawImage(
    texture: PIXI.Texture,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    const resource = texture.baseTexture.resource;
if (resource && 'source' in resource) {
  const source = (resource as any).source as HTMLImageElement;
  this.skiaContext.drawImage(source, x, y, width, height);
} else {
  console.warn("Texture source is not available.");
}

  }

  generatePDF(): Uint8Array {
    if (this.skiaContext.generatePDF) {
      return this.skiaContext.generatePDF();
    } else {
      throw new Error("Skia context does not support PDF generation.");
    }
  }
}

export function initializeApp() {
  console.log("Initializing Skia Wrapper...");
  // Здесь можно инициализировать приложение, подключить Pixi и Skia
}

export default SkiaWrapper;
