// import { Application, Assets, Sprite } from "pixi.js";
// import {BulgePinchFilter} from '@pixi/filter-bulge-pinch';
// import {Container} from 'pixi.js';
//
// (async () => {
//   // Create a new application
//   const app = new Application();
//
//   // Initialize the application
//   await app.init({
//     preference: 'webgl',background: "#1099bb", resizeTo: window });
//
//   // Append the application canvas to the document body
//   document.getElementById("pixi-container").appendChild(app.canvas);
//
//     // Load a texture (you can change this URL to any image)
//     const imageURL = 'https://raw.githubusercontent.com/TorontoWaterAtlas/WaterAttention/refs/heads/main/2025-05-05_13-49-19.png';
//
//     const texture = await Assets.load(imageURL);
//     const sprite = new Sprite(texture);
//     sprite.anchor.set(0.5);
//     sprite.x = app.screen.width / 2;
//     sprite.y = app.screen.height / 2;
//     // sprite.width = app.screen.width;
//     // sprite.height = app.screen.height;
//   // sprite.scale.set(1);
//     const container = new Container();
//     container.addChild(sprite);
//
//     // Apply BulgePinchFilter
//     const filter = new BulgePinchFilter({
//       center: [0.5, 0.5], // normalized center
//       radius: 900,
//       strength: 1,
//     });
//
//   sprite.filters = [filter];
//   app.stage.addChild(sprite);
//   app.renderer.on('error', console.error);
//
//     // Animate the bulge effect
//     let tick = 0;
//     app.ticker.add((time) => {
//       tick += time.deltaTime * 0.5
//       filter.strength = Math.sin(tick); // bulge to pinch
//       // console.log(filter.strength);
//       // (container.filters.map(filter => console.log(filter.strength)));
//     });
//   console.log(app.renderer.type);
//   app.stage.eventMode = 'static'; // enables interaction events
//   sprite.eventMode = 'static';
//
//   app.stage.on('pointermove', (event) => {
//     const global = event.global;
//     const x = global.x / app.screen.width;
//     const y = global.y / app.screen.height;
//     filter.center = [x, y];
//     // console.log(filter.center);
//     // console.log(filter.strength);
//   });
//
//
// })();

import { Application, Assets, Sprite } from "pixi.js";
import { BulgePinchFilter } from "pixi-filters";
import { Container } from "pixi.js";

// Water bodies data with year-wise Google Trends values (2010-2025)
const waterBodiesData = [
  {
    name: "donRiver",
    center: { x: 0.655, y: 0.5302 },
    yearlyData: {
      2010: 1,
      2011: 1,
      2012: 8,
      2013: 10,
      2014: 13,
      2015: 12,
      2016: 10,
      2017: 12,
      2018: 9,
      2019: 6,
      2020: 5,
      2021: 10,
      2022: 3,
      2023: 7,
      2024: 8,
      2025: 9,
    },
  },
  {
    name: "humberRiver",
    center: { x: 0.135, y: 0.613 },
    yearlyData: {
      2010: 31,
      2011: 27,
      2012: 35,
      2013: 35,
      2014: 35,
      2015: 35,
      2016: 38,
      2017: 35,
      2018: 36,
      2019: 54,
      2020: 59,
      2021: 56,
      2022: 81,
      2023: 59,
      2024: 51,
      2025: 54,
    },
  },
  {
    name: "blackCreek",
    center: { x: 0.1885, y: 0.4472 },
    yearlyData: {
      2010: 57,
      2011: 65,
      2012: 55,
      2013: 52,
      2014: 53,
      2015: 51,
      2016: 52,
      2017: 55,
      2018: 40,
      2019: 36,
      2020: 33,
      2021: 16,
      2022: 34,
      2023: 40,
      2024: 36,
      2025: 41,
    },
  },
  {
    name: "keatingChannel",
    center: { x: 0.712, y: 0.7051 },
    yearlyData: {
      2010: 0,
      2011: 1,
      2012: 0,
      2013: 0,
      2014: 1,
      2015: 1,
      2016: 1,
      2017: 1,
      2018: 0,
      2019: 0,
      2020: 1,
      2021: 1,
      2022: 1,
      2023: 1,
      2024: 1,
      2025: 1,
    },
  },
  {
    name: "mimicoCreek",
    center: { x: 0.144, y: 0.8316 },
    yearlyData: {
      2010: 1,
      2011: 1,
      2012: 1,
      2013: 1,
      2014: 1,
      2015: 1,
      2016: 1,
      2017: 1,
      2018: 1,
      2019: 1,
      2020: 1,
      2021: 1,
      2022: 1,
      2023: 1,
      2024: 1,
      2025: 1,
    },
  },
  {
    name: "mudCreek",
    center: { x: 0.61595, y: 0.3503 },
    yearlyData: {
      2010: 1,
      2011: 1,
      2012: 1,
      2013: 1,
      2014: 1,
      2015: 1,
      2016: 1,
      2017: 1,
      2018: 1,
      2019: 1,
      2020: 1,
      2021: 1,
      2022: 1,
      2023: 1,
      2024: 1,
      2025: 1,
    },
  },
  {
    name: "taylorMasseyCreek",
    center: { x: 0.812, y: 0.2445 },
    yearlyData: {
      2010: 0,
      2011: 1,
      2012: 1,
      2013: 1,
      2014: 1,
      2015: 1,
      2016: 1,
      2017: 1,
      2018: 1,
      2019: 1,
      2020: 1,
      2021: 1,
      2022: 1,
      2023: 1,
      2024: 1,
      2025: 1,
    },
  },
  {
    name: "yellowCreek",
    center: { x: 0.5509, y: 0.365 },
    yearlyData: {
      2010: 0,
      2011: 0,
      2012: 1,
      2013: 1,
      2014: 1,
      2015: 1,
      2016: 1,
      2017: 1,
      2018: 1,
      2019: 1,
      2020: 1,
      2021: 1,
      2022: 1,
      2023: 1,
      2024: 1,
      2025: 1,
    },
  },
  {
    name: "nordheimerRavine",
    center: { x: 0.464, y: 0.392 },
    yearlyData: {
      2010: 0,
      2011: 1,
      2012: 1,
      2013: 1,
      2014: 1,
      2015: 1,
      2016: 1,
      2017: 1,
      2018: 1,
      2019: 1,
      2020: 1,
      2021: 1,
      2022: 1,
      2023: 1,
      2024: 1,
      2025: 1,
    },
  },
  // Water bodies with consistently zero values
  {
    name: "cudmoreCreek",
    center: { x: 0.628, y: 0.3237 },
    yearlyData: {
      2010: 0,
      2011: 0,
      2012: 0,
      2013: 0,
      2014: 0,
      2015: 0,
      2016: 0,
      2017: 0,
      2018: 0,
      2019: 0,
      2020: 0,
      2021: 0,
      2022: 0,
      2023: 0,
      2024: 0,
      2025: 0,
    },
  },
  {
    name: "smallsCreek",
    center: { x: 0.8005, y: 0.4253 },
    yearlyData: {
      2010: 0,
      2011: 0,
      2012: 0,
      2013: 0,
      2014: 0,
      2015: 0,
      2016: 0,
      2017: 0,
      2018: 0,
      2019: 0,
      2020: 0,
      2021: 0,
      2022: 0,
      2023: 0,
      2024: 0,
      2025: 0,
    },
  },
  {
    name: "donRiverWestBranch",
    center: { x: 0.604, y: 0.0193 },
    yearlyData: {
      2010: 0,
      2011: 0,
      2012: 0,
      2013: 0,
      2014: 0,
      2015: 0,
      2016: 0,
      2017: 0,
      2018: 0,
      2019: 0,
      2020: 0,
      2021: 0,
      2022: 0,
      2023: 0,
      2024: 0,
      2025: 0,
    },
  },
  {
    name: "burkeBrook",
    center: { x: 0.6055, y: 0.0762 },
    yearlyData: {
      2010: 0,
      2011: 0,
      2012: 0,
      2013: 0,
      2014: 0,
      2015: 0,
      2016: 0,
      2017: 0,
      2018: 0,
      2019: 0,
      2020: 0,
      2021: 0,
      2022: 0,
      2023: 0,
      2024: 0,
      2025: 0,
    },
  },
  {
    name: "wilsonBrook",
    center: { x: 0.8375, y: 0.0163 },
    yearlyData: {
      2010: 0,
      2011: 0,
      2012: 0,
      2013: 0,
      2014: 0,
      2015: 0,
      2016: 0,
      2017: 0,
      2018: 0,
      2019: 0,
      2020: 0,
      2021: 0,
      2022: 0,
      2023: 0,
      2024: 0,
      2025: 0,
    },
  },
  {
    name: "curityCreek",
    center: { x: 0.7975, y: 0.217 },
    yearlyData: {
      2010: 0,
      2011: 0,
      2012: 0,
      2013: 0,
      2014: 0,
      2015: 0,
      2016: 0,
      2017: 0,
      2018: 0,
      2019: 0,
      2020: 0,
      2021: 0,
      2022: 0,
      2023: 0,
      2024: 0,
      2025: 0,
    },
  },
  {
    name: "ferrisCreek",
    center: { x: 0.8268, y: 0.2244 },
    yearlyData: {
      2010: 0,
      2011: 0,
      2012: 0,
      2013: 0,
      2014: 0,
      2015: 0,
      2016: 0,
      2017: 0,
      2018: 0,
      2019: 0,
      2020: 0,
      2021: 0,
      2022: 0,
      2023: 0,
      2024: 0,
      2025: 0,
    },
  },
];

// Normalization configuration
const config = {
  radius: {
    min: 50, // Increased minimum radius for visibility
    max: 200, // Increased maximum radius
    useLog: true, // Apply logarithmic scaling
  },
  strength: {
    min: -1.0, // Minimum strength (pinch for zero values)
    max: 1.0, // Reduced maximum strength for better visual balance
    useLog: true, // Logarithmic scaling for strength
  },
};

// Function to calculate total references for a given year
function getTotalReferencesForYear(year) {
  let total = 0;
  waterBodiesData.forEach((waterBody) => {
    total += waterBody.yearlyData[year] || 0;
  });
  return total;
}

// Normalization functions
function normalizeValue(
  value,
  minVal,
  maxVal,
  targetMin,
  targetMax,
  useLog = false,
) {
  // Handle edge case where all values are the same
  if (maxVal === minVal) {
    return (targetMin + targetMax) / 2;
  }

  let normalizedInput;

  if (useLog) {
    // Add 1 to avoid log(0), then apply logarithm
    const logValue = Math.log(value + 1);
    const logMin = Math.log(minVal + 1);
    const logMax = Math.log(maxVal + 1);
    normalizedInput = (logValue - logMin) / (logMax - logMin);
  } else {
    // Linear normalization
    normalizedInput = (value - minVal) / (maxVal - minVal);
  }

  // Scale to target range: n * (M - m) + m
  return normalizedInput * (targetMax - targetMin) + targetMin;
}

// Convert yearly data to the format expected by createNormalizedFilters
function getDataForYear(waterBodiesData, year) {
  return waterBodiesData.map((item) => ({
    name: item.name,
    center: item.center,
    googleTrends: item.yearlyData[year] || 0,
  }));
}

function createNormalizedFilters(data, config) {
  // Find min and max Google Trends values for this dataset
  const googleTrendsValues = data.map((item) => item.googleTrends);
  const minTrends = Math.min(...googleTrendsValues);
  const maxTrends = Math.max(...googleTrendsValues);

  console.log(
    `Google Trends range for current year: ${minTrends} - ${maxTrends}`,
  );

  const filters = {};

  data.forEach((item) => {
    const normalizedRadius = normalizeValue(
      item.googleTrends,
      minTrends,
      maxTrends,
      config.radius.min,
      config.radius.max,
      config.radius.useLog,
    );

    // Special handling for strength: zero values get -1 (pinch)
    let normalizedStrength;
    if (item.googleTrends === 0) {
      normalizedStrength = -1; // Pinch effect for zero values
    } else {
      // Normalize non-zero values between 0 and 1 (bulge range)
      const nonZeroValues = googleTrendsValues.filter((val) => val > 0);
      if (nonZeroValues.length === 0) {
        normalizedStrength = 0.4; // Default if all values are zero
      } else {
        const minNonZero = Math.min(...nonZeroValues);
        const maxNonZero = Math.max(...nonZeroValues);

        normalizedStrength = normalizeValue(
          item.googleTrends,
          minNonZero,
          maxNonZero,
          0.4, // Balanced minimum for visibility without being too strong
          config.strength.max,
          config.strength.useLog,
        );
      }
    }

    filters[item.name] = new BulgePinchFilter({
      center: item.center,
      radius: normalizedRadius,
      strength: normalizedStrength,
    });

    const effectType = normalizedStrength < 0 ? "PINCH" : "BULGE";
    console.log(
      `${item.name}: trends=${item.googleTrends}, radius=${normalizedRadius.toFixed(1)}, strength=${normalizedStrength.toFixed(2)} (${effectType})`,
    );
  });

  return filters;
}

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

  // Load a texture
  const imageURL =
    "https://raw.githubusercontent.com/TorontoWaterAtlas/WaterAttention/refs/heads/main/2025-05-05_13-49-19.png";

  const texture = await Assets.load(imageURL);
  const sprite = new Sprite(texture);
  sprite.anchor.set(0.5);
  sprite.x = app.screen.width / 2;
  sprite.y = app.screen.height / 2;
  sprite.width = app.screen.width;
  sprite.height = app.screen.height;

  const container = new Container();
  container.height = 500;
  app.stage.addChild(container);
  container.addChild(sprite);

  // Year control variables
  let currentYear = 2022; // Start with 2022 as in your original data
  let bulgeFilters = {};

  document.getElementById("currentyeartext").textContent = currentYear;

  // Function to update filters for a specific year
  function updateFiltersForYear(year) {
    console.log(`\n=== Updating to year ${year} ===`);
    const yearData = getDataForYear(waterBodiesData, year);
    bulgeFilters = createNormalizedFilters(yearData, config);

    // Apply filters to container
    const filterArray = Object.values(bulgeFilters);
    container.filters = filterArray;

    console.log(`Applied ${filterArray.length} filters for year ${year}`);
    currentYear = year;

    // Update the info box with total references
    const totalReferences = getTotalReferencesForYear(year);
    const infoNumber = document.querySelector(".info-number");
    const infoYear = document.querySelector(".info-year");

    if (infoNumber && infoYear) {
      infoNumber.textContent = totalReferences;
      infoYear.textContent = year;
    }

    // Update year display text
    document.getElementById("currentyeartext").textContent = year;
  }

  // Get button elements
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const timelineSlider = document.getElementById("timeline");
  const currentYearText = document.getElementById("currentyeartext");

  // Years array
  const years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023, 2024, 2025,
  ];

  // Set up slider
  timelineSlider.max = years.length - 1;
  timelineSlider.value = years.indexOf(currentYear);

  // Update year display and position
  function updateYearDisplay(year) {
    const yearDisplay = document.getElementById("currentyeartext");
    const slider = document.getElementById("timeline");

    yearDisplay.textContent = year;

    // Calculate position based on slider value
    const sliderValue = slider.value;
    const sliderMax = slider.max;
    const sliderWidth = slider.offsetWidth;

    // Calculate percentage and position
    const percentage = sliderValue / sliderMax;
    const position = percentage * sliderWidth;

    // Update year display position
    yearDisplay.style.left = position + "px";
  }

  // Updated auto-play functionality
  let autoPlayInterval = null;
  let isPlaying = false;

  function startAutoPlay() {
    if (isPlaying) return;

    isPlaying = true;
    playBtn.style.display = "none";
    pauseBtn.style.display = "flex";

    let yearIndex = years.indexOf(currentYear);

    autoPlayInterval = setInterval(() => {
      yearIndex = (yearIndex + 1) % years.length;
      updateFiltersForYear(years[yearIndex]);
      timelineSlider.value = yearIndex;
      updateYearDisplay(currentYear);
    }, 1000);
  }

  function stopAutoPlay() {
    if (!isPlaying) return;

    isPlaying = false;
    playBtn.style.display = "flex";
    pauseBtn.style.display = "none";

    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  // Button event listeners
  playBtn.addEventListener("click", startAutoPlay);
  pauseBtn.addEventListener("click", stopAutoPlay);

  // Slider event listener
  timelineSlider.addEventListener("input", (e) => {
    const yearIndex = parseInt(e.target.value);
    const selectedYear = years[yearIndex];
    updateFiltersForYear(selectedYear);
    updateYearDisplay(currentYear);

    // Stop auto-play when user manually changes slider
    if (isPlaying) {
      stopAutoPlay();
    }
  });

  // Update the existing keyboard controls to work with new play/pause buttons
  window.addEventListener("keydown", (event) => {
    const currentIndex = years.indexOf(currentYear);

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        if (currentIndex > 0) {
          updateFiltersForYear(years[currentIndex - 1]);
          timelineSlider.value = currentIndex - 1;
          updateYearDisplay(currentYear);
          if (isPlaying) stopAutoPlay();
        }
        break;
      case "ArrowRight":
      case "ArrowUp":
        if (currentIndex < years.length - 1) {
          updateFiltersForYear(years[currentIndex + 1]);
          timelineSlider.value = currentIndex + 1;
          updateYearDisplay(currentYear);
          if (isPlaying) stopAutoPlay();
        }
        break;
      case " ":
        event.preventDefault();
        if (isPlaying) {
          stopAutoPlay();
        } else {
          startAutoPlay();
        }
        break;
    }
  });

  // Initialize with starting year
  updateFiltersForYear(currentYear);
  updateYearDisplay(currentYear);

  // Static filters - no animation for now
  // Animation will be added later for year-by-year data transitions

  // Interactive year controls via keyboard
  // window.addEventListener("keydown", (event) => {
  //   const availableYears = [
  //     2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  //     2022, 2023, 2024, 2025,
  //   ];
  //   const currentIndex = availableYears.indexOf(currentYear);
  //
  //   switch (event.key) {
  //     case "ArrowLeft":
  //     case "ArrowDown":
  //       // Go to previous year
  //       if (currentIndex > 0) {
  //         updateFiltersForYear(availableYears[currentIndex - 1]);
  //       }
  //       break;
  //     case "ArrowRight":
  //     case "ArrowUp":
  //       // Go to next year
  //       if (currentIndex < availableYears.length - 1) {
  //         updateFiltersForYear(availableYears[currentIndex + 1]);
  //       }
  //       break;
  //     case " ": // Spacebar for auto-play
  //       event.preventDefault();
  //       startAutoPlay();
  //       break;
  //   }
  // });

  // Auto-play functionality
  // let autoPlayInterval = null;
  // function startAutoPlay() {
  //   if (autoPlayInterval) {
  //     clearInterval(autoPlayInterval);
  //     autoPlayInterval = null;
  //     console.log("Auto-play stopped");
  //     return;
  //   }
  //
  //   console.log("Auto-play started - press spacebar again to stop");
  //   const years = [
  //     2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  //     2022, 2023, 2024, 2025,
  //   ];
  //   let yearIndex = years.indexOf(currentYear);
  //
  //   const timelineSlider = document.getElementById("timeline");
  //   const currentYearText = document.getElementById("currentyeartext");
  //   timelineSlider.max = years.length;
  //   timelineSlider.value = yearIndex;
  //   currentYearText.textContent = currentYear;
  //
  //   autoPlayInterval = setInterval(() => {
  //     yearIndex = (yearIndex + 1) % years.length;
  //     updateFiltersForYear(years[yearIndex]);
  //     timelineSlider.value = yearIndex;
  //     currentYearText.textContent = currentYear;
  //   }, 1000); // Change year every second
  // }
  //
  // // Interactive features for clicking
  // app.stage.eventMode = "static";
  // sprite.eventMode = "static";
  //
  // app.stage.on("pointerdown", (event) => {
  //   const global = event.global;
  //   const x = global.x / app.screen.width;
  //   const y = global.y / app.screen.height;
  //   console.log(
  //     `\nClick coordinates: { x: ${x.toFixed(5)}, y: ${y.toFixed(5)} }`,
  //   );
  //
  //   // Find the closest water body to the click
  //   let closestBody = null;
  //   let minDistance = Infinity;
  //
  //   waterBodiesData.forEach((body) => {
  //     const distance = Math.sqrt(
  //       Math.pow(body.center.x - x, 2) + Math.pow(body.center.y - y, 2),
  //     );
  //     if (distance < minDistance) {
  //       minDistance = distance;
  //       closestBody = body;
  //     }
  //   });
  //
  //   if (closestBody && minDistance < 0.1) {
  //     // Within reasonable distance
  //     const trendsValue = closestBody.yearlyData[currentYear];
  //     console.log(`Closest water body: ${closestBody.name}`);
  //     console.log(`${currentYear} Google Trends: ${trendsValue}`);
  //     console.log(`Historical data:`, closestBody.yearlyData);
  //   }
  // });

  // Display current year info
  console.log("\n=== CONTROLS ===");
  console.log("Arrow Keys: Navigate between years");
  console.log("Spacebar: Start/stop auto-play through years");
  console.log("Click: Get info about water bodies");
  console.log(`\nStarting year: ${currentYear}`);

  // Add a legend or info display
  console.log("Water Bodies Visualization Loaded");
  console.log("Radius range:", config.radius.min, "-", config.radius.max);
  console.log("Strength range:", config.strength.min, "-", config.strength.max);
  console.log("Logarithmic radius scaling:", config.radius.useLog);
  console.log("Logarithmic strength scaling:", config.strength.useLog);
})();
