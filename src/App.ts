import { Application, Container, Graphics } from "pixi.js";
import  SkiaWrapper from "./SkiaWrapper";
import { initializeControls } from "./ui/controls";

const app = new Application({ width: 800, height: 600, forceCanvas: true });
document.body.appendChild(app.view as unknown as Node);

const mainContainer = new Container();
app.stage.addChild(mainContainer);

// Инициализация объектов
const g1 = new Graphics();
g1.beginFill(0xff0000).drawEllipse(0, 0, 100, 50).endFill();
mainContainer.addChild(g1);

// Инициализация Skia
const skiaContext = {}; // Подключение реального контекста Skia
const skiaWrapper = new SkiaWrapper(skiaContext);

// Рендеринг
const renderToSkia = () => {
  skiaWrapper.renderContainer(mainContainer);
};
initializeControls(renderToSkia);
