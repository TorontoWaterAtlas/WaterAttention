// Assuming the HTML already includes UI elements as in the previous message

const geojsonFiles = [
    {
        "filename": "black_creek.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 57,
            "2011": 65,
            "2012": 55,
            "2013": 52,
            "2014": 53,
            "2015": 51,
            "2016": 52,
            "2017": 55,
            "2018": 40,
            "2019": 36,
            "2020": 33,
            "2021": 16,
            "2022": 34,
            "2023": 40,
            "2024": 36,
            "2025": 41
        }
    },
    {
        "filename": "curity_creek.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 0,
            "2012": 0,
            "2013": 0,
            "2014": 0,
            "2015": 0,
            "2016": 0,
            "2017": 0,
            "2018": 0,
            "2019": 0,
            "2020": 0,
            "2021": 0,
            "2022": 0,
            "2023": 0,
            "2024": 0,
            "2025": 0
        }
    },
    {
        "filename": "humber_river.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 31,
            "2011": 27,
            "2012": 35,
            "2013": 35,
            "2014": 35,
            "2015": 35,
            "2016": 38,
            "2017": 35,
            "2018": 36,
            "2019": 54,
            "2020": 59,
            "2021": 56,
            "2022": 81,
            "2023": 59,
            "2024": 51,
            "2025": 54
        }
    },
    {
        "filename": "smalls_creek.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 0,
            "2012": 0,
            "2013": 0,
            "2014": 0,
            "2015": 0,
            "2016": 0,
            "2017": 0,
            "2018": 0,
            "2019": 0,
            "2020": 0,
            "2021": 0,
            "2022": 0,
            "2023": 0,
            "2024": 0,
            "2025": 0
        }
    },
    {
        "filename": "burke_brook.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 0,
            "2012": 0,
            "2013": 0,
            "2014": 0,
            "2015": 0,
            "2016": 0,
            "2017": 0,
            "2018": 0,
            "2019": 0,
            "2020": 0,
            "2021": 0,
            "2022": 0,
            "2023": 0,
            "2024": 0,
            "2025": 0
        }
    },
    {
        "filename": "don_river.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 1,
            "2011": 1,
            "2012": 8,
            "2013": 10,
            "2014": 13,
            "2015": 12,
            "2016": 10,
            "2017": 12,
            "2018": 9,
            "2019": 6,
            "2020": 5,
            "2021": 10,
            "2022": 3,
            "2023": 7,
            "2024": 8,
            "2025": 9
        }
    },
    {
        "filename": "keating_channel.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 1,
            "2012": 0,
            "2013": 0,
            "2014": 1,
            "2015": 1,
            "2016": 1,
            "2017": 1,
            "2018": 0,
            "2019": 0,
            "2020": 1,
            "2021": 1,
            "2022": 1,
            "2023": 1,
            "2024": 1,
            "2025": 1
        }
    },
    {
        "filename": "taylor_massey_creek.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 1,
            "2012": 1,
            "2013": 1,
            "2014": 1,
            "2015": 1,
            "2016": 1,
            "2017": 1,
            "2018": 1,
            "2019": 1,
            "2020": 1,
            "2021": 1,
            "2022": 1,
            "2023": 1,
            "2024": 1,
            "2025": 1
        }
    },
    {
        "filename": "castle_frank_brook.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 1,
            "2012": 1,
            "2013": 1,
            "2014": 1,
            "2015": 1,
            "2016": 1,
            "2017": 1,
            "2018": 1,
            "2019": 1,
            "2020": 1,
            "2021": 1,
            "2022": 1,
            "2023": 1,
            "2024": 1,
            "2025": 1
        }
    },
    {
        "filename": "mimico_creek.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 1,
            "2011": 1,
            "2012": 1,
            "2013": 1,
            "2014": 1,
            "2015": 1,
            "2016": 1,
            "2017": 1,
            "2018": 1,
            "2019": 1,
            "2020": 1,
            "2021": 1,
            "2022": 1,
            "2023": 1,
            "2024": 1,
            "2025": 1
        }
    },
    {
        "filename": "wilson_brook.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 0,
            "2012": 0,
            "2013": 0,
            "2014": 0,
            "2015": 0,
            "2016": 0,
            "2017": 0,
            "2018": 0,
            "2019": 0,
            "2020": 0,
            "2021": 0,
            "2022": 0,
            "2023": 0,
            "2024": 0,
            "2025": 0
        }
    },
    {
        "filename": "cudmore_creek.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 0,
            "2012": 0,
            "2013": 0,
            "2014": 0,
            "2015": 0,
            "2016": 0,
            "2017": 0,
            "2018": 0,
            "2019": 0,
            "2020": 0,
            "2021": 0,
            "2022": 0,
            "2023": 0,
            "2024": 0,
            "2025": 0
        }
    },
    {
        "filename": "ferris_creek.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 0,
            "2012": 0,
            "2013": 0,
            "2014": 0,
            "2015": 0,
            "2016": 0,
            "2017": 0,
            "2018": 0,
            "2019": 0,
            "2020": 0,
            "2021": 0,
            "2022": 0,
            "2023": 0,
            "2024": 0,
            "2025": 0
        }
    },
    {
        "filename": "mud_creek.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 1,
            "2011": 1,
            "2012": 1,
            "2013": 1,
            "2014": 1,
            "2015": 1,
            "2016": 1,
            "2017": 1,
            "2018": 1,
            "2019": 1,
            "2020": 1,
            "2021": 1,
            "2022": 1,
            "2023": 1,
            "2024": 1,
            "2025": 1
        }
    },
    {
        "filename": "yellow_creek.geojson",
        "color": "blue",
        "yearlyData": {
            "2010": 0,
            "2011": 0,
            "2012": 1,
            "2013": 1,
            "2014": 1,
            "2015": 1,
            "2016": 1,
            "2017": 1,
            "2018": 1,
            "2019": 1,
            "2020": 1,
            "2021": 1,
            "2022": 1,
            "2023": 1,
            "2024": 1,
            "2025": 1
        }
    }
];
const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

let currentYearIndex = 0;
let currentYear = years[currentYearIndex];
let isPlaying = false;
let intervalId = null;
let map;

function updateUI(year) {
  const totalRefs = geojsonFiles.reduce((sum, f) => sum + (f.yearlyData[year] || 0), 0);
  document.getElementById('total-count').textContent = totalRefs;
  document.getElementById('year-label').textContent = year;
  document.getElementById('currentyeartext').textContent = year;

  const slider = document.getElementById('timeline');
  const yearDisplay = document.getElementById('currentyeartext');
  const percent = slider.value / slider.max;
  const sliderWidth = slider.offsetWidth;
  yearDisplay.style.left = (percent * sliderWidth) + 'px';
}

function normalizeValue(value, minVal, maxVal, targetMin, targetMax) {
  if (maxVal === minVal) return (targetMin + targetMax) / 2;
  const normalizedInput = (value - minVal) / (maxVal - minVal);
  return normalizedInput * (targetMax - targetMin) + targetMin;
}

function initMap() {
  map = L.map('map').setView([43.71, -79.45], 12.2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  geojsonFiles.forEach((file) => {
    fetch(`data/${file.filename}`)
      .then(res => res.json())
      .then(data => {
        const layer = L.geoJSON(data, {
          style: feature => {
            const ref = file.yearlyData[currentYear] || 0;
            const weight = normalizeValue(ref, 1, 100, 5, 65);
            return { color: file.color, weight };
          }
        });

        layer.eachLayer(l => {
          l.on('mouseover', (e) => {
            const box = document.getElementById('hover-box');
            box.innerHTML = `
              <div style="background:#c5f3c4;font-weight:bold;padding:4px 8px;">
                ${file.filename.replace('.geojson', '').replaceAll('_', ' ')}
              </div>
              <div style="padding-top:4px;">
                ${file.yearlyData[currentYear] || 0} references in ${currentYear}
              </div>
            `;
            box.style.left = e.originalEvent.pageX + 10 + 'px';
            box.style.top = e.originalEvent.pageY + 10 + 'px';
            box.style.display = 'block';
          });

          l.on('mouseout', () => {
            document.getElementById('hover-box').style.display = 'none';
          });
        });

        layer.addTo(map);
        file.layer = layer; // store reference
      });
  });
}

function refreshLayersForYear(year) {
  geojsonFiles.forEach(file => {
    if (!file.layer) return;
    const weight = normalizeValue(file.yearlyData[year] || 0, 1, 100, 5, 65);
    file.layer.setStyle({ weight });
  });
  updateUI(year);
}

function play() {
  if (isPlaying) return;
  isPlaying = true;
  document.getElementById('play-btn').style.display = 'none';
  document.getElementById('pause-btn').style.display = 'inline-block';
  intervalId = setInterval(() => {
    currentYearIndex = (currentYearIndex + 1) % years.length;
    currentYear = years[currentYearIndex];
    document.getElementById('timeline').value = currentYearIndex;
    refreshLayersForYear(currentYear);
  }, 1000);
}

function pause() {
  isPlaying = false;
  clearInterval(intervalId);
  document.getElementById('play-btn').style.display = 'inline-block';
  document.getElementById('pause-btn').style.display = 'none';
}

window.onload = () => {
  initMap();
  refreshLayersForYear(currentYear);

  document.getElementById('play-btn').addEventListener('click', play);
  document.getElementById('pause-btn').addEventListener('click', pause);
  document.getElementById('timeline').addEventListener('input', (e) => {
    currentYearIndex = parseInt(e.target.value);
    currentYear = years[currentYearIndex];
    refreshLayersForYear(currentYear);
    if (isPlaying) pause();
  });
};
