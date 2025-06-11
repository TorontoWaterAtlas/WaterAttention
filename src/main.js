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
  const bulgeFilters = {
    donRiver: new BulgePinchFilter({
      center: { x: 0.655, y: 0.5302 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    humberRiver: new BulgePinchFilter({
      center: { x: 0.135, y: 0.613 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    blackCreek: new BulgePinchFilter({
      center: { x: 0.1885, y: 0.4472 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    keatingChannel: new BulgePinchFilter({
      center: { x: 0.712, y: 0.7051 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    mimicoCreek: new BulgePinchFilter({
      center: { x: 0.144, y: 0.8316 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    mudCreek: new BulgePinchFilter({
      center: { x: 0.61595, y: 0.3503 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    taylorMasseyCreek: new BulgePinchFilter({
      center: { x: 0.812, y: 0.2445 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    yellowCreek: new BulgePinchFilter({
      center: { x: 0.5509, y: 0.365 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    nordheimerRavine: new BulgePinchFilter({
      center: { x: 0.464, y: 0.392 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    cudmoreCreek: new BulgePinchFilter({
      center: { x: 0.628, y: 0.3237 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    smallsCreek: new BulgePinchFilter({
      center: { x: 0.8005, y: 0.4253 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    donRiverWestBranch: new BulgePinchFilter({
      center: { x: 0.604, y: 0.0193 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    burkeBrook: new BulgePinchFilter({
      center: { x: 0.6055, y: 0.0762 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    wilsonBrook: new BulgePinchFilter({
      center: { x: 0.8375, y: 0.0163 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    curityCreek: new BulgePinchFilter({
      center: { x: 0.7975, y: 0.217 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    ferrisCreek: new BulgePinchFilter({
      center: { x: 0.8268, y: 0.2244 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    grenadierPond: new BulgePinchFilter({
      center: { x: 0.25596, y: 0.74421 }, // normalized center
      radius: 50,
      strength: 1,
    }),
    catfishPond: new BulgePinchFilter({
      center: { x: 0.24397, y: 0.86314 }, // normalized center
      radius: 50,
      strength: 1,
    }),
  };

  const bpfilter = new BulgePinchFilter();
  bpfilter.radius = 250;
  container.filters = Object.values(bulgeFilters);
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
