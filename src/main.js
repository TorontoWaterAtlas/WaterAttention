import { Application, Assets, Sprite } from "pixi.js";
import { BulgePinchFilter } from "pixi-filters";
import { Container } from "pixi.js";

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({
    preference: "webgl",
    background: "#1099bb",
    resizeTo: window,
  });

  // Append the application canvas to the document body
  document.getElementById("pixi-container").appendChild(app.canvas);

  // Load a texture (you can change this URL to any image)
  const imageURL =
    "https://raw.githubusercontent.com/TorontoWaterAtlas/WaterAttention/refs/heads/main/2025-05-05_13-49-19.png";

  const texture = await Assets.load(imageURL);
  const sprite = new Sprite(texture);
  sprite.anchor.set(0.5);
  sprite.x = app.screen.width / 2;
  sprite.y = app.screen.height / 2;
  // sprite.width = app.screen.width;
  // sprite.height = app.screen.height;
  // sprite.scale.set(1);
  const container = new Container();
  app.stage.addChild(container);
  container.addChild(sprite);

  // Apply BulgePinchFilter
  const filter = new BulgePinchFilter({
    center: { x: 0.696, y: 0.5 }, // normalized center
    radius: 50,
    strength: 1,
  });
  const filter2 = new BulgePinchFilter({
    center: { x: 0.6742, y: 0.42 }, // normalized center
    radius: 50,
    strength: 1,
  });
  const bpfilter = new BulgePinchFilter();
  bpfilter.radius = 250;
  console.log("filter2:", filter);
  container.filters = [filter, filter, filter, filter2, filter2, filter2];
  console.log("container", container);
  // app.renderer.on("error", console.error);

  // Animate the bulge effect
  let tick = 0;
  app.ticker.add((time) => {
    tick += time.deltaTime * 0.05;
    filter.radius = 50 * Math.sin(tick); // bulge to pinch
    filter2.radius = 100 * Math.sin(tick); // bulge to pinch

    // console.log(filter.strength);
    // (container.filters.map(filter => console.log(filter.strength)));
  });
  console.log(app.renderer.type);
  app.stage.eventMode = "static"; // enables interaction events
  sprite.eventMode = "static";

  app.stage.on("pointermove", (event) => {
    const global = event.global;
    const x = global.x / app.screen.width;
    const y = global.y / app.screen.height;
    //filter.center = [x, y];
    // console.log(filter.center);
    // console.log(filter.strength);
  });
})();
