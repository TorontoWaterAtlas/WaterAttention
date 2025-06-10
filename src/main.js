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
  console.log("screen width:", app.screen.width);
  console.log("sprite width:", sprite.width);
  sprite.width = app.screen.width;
  sprite.height = app.screen.height;
  //  sprite.scale.set(1);
  console.log("sprite width:", sprite.width);
  const container = new Container();
  container.height = 500;
  app.stage.addChild(container);
  container.addChild(sprite);

  // Apply BulgePinchFilter
  const donFilterList = [
    new BulgePinchFilter({
      center: { x: 0.655, y: 0.555 }, // normalized center
      radius: 50,
      strength: 1,
    }),
  ];
  const radius = 200;
  const humberFilterList = [
    new BulgePinchFilter({
      center: { x: 0.15167862756540498, y: 0.6520889489798533 },
      radius: 50,
      strength: 1,
    }),
    new BulgePinchFilter({
      center: { x: 0.12496472248213536, y: 0.629818067717745 },
      radius: 50,
      strength: 1,
    }),
    new BulgePinchFilter({
      center: { x: 0.13222601128740347, y: 0.5890330108349535 },
      radius: 50,
      strength: 1,
    }),
    new BulgePinchFilter({
      center: { x: 0.22135759355291823, y: 0.7953546654503301 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    new BulgePinchFilter({
      center: { x: 0.16718015051600177, y: 0.7204515320271495 },
      radius: 50,
      strength: 1,
    }),
  ];
  const bpfilter = new BulgePinchFilter();
  bpfilter.radius = 250;
  container.filters = [...donFilterList, ...humberFilterList];
  // app.renderer.on("error", console.error);

  // Animate the bulge effect
  let tick = 0;
  app.ticker.add((time) => {
    tick += time.deltaTime * 0.05;
    // filter.radius = 50 * Math.sin(tick); // bulge to pinch
    // filter2.radius = 100 * Math.sin(tick); // bulge to pinch

    // console.log(filter.strength);
    // (container.filters.map(filter => console.log(filter.strength)));
  });
  console.log(app.renderer.type);
  app.stage.eventMode = "static"; // enables interaction events
  sprite.eventMode = "static";

  app.stage.on("pointerdown", (event) => {
    const global = event.global;
    const x = global.x / app.screen.width;
    const y = global.y / app.screen.height;
    console.log(`click: { x: ${x}, y: ${y}}`);
    //filter.center = [x, y];
    // console.log(filter.center);
    // console.log(filter.strength);
  });
})();
