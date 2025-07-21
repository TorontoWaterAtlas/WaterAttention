// Assuming the HTML already includes UI elements as in the previous message

const geojsonFiles = [
    {
        "filename": "black_creek.geojson",
        "name": "blackCreek",
        "color": "blue",
        "yearlyData": {
            "2010": 57, "2011": 65, "2012": 55, "2013": 52, "2014": 53, "2015": 51,
            "2016": 52, "2017": 55, "2018": 40, "2019": 36, "2020": 33, "2021": 16,
            "2022": 34, "2023": 40, "2024": 36, "2025": 41
        },
        "yearlyDataJournal": {
            "2010": 34, "2011": 52, "2012": 56, "2013": 39, "2014": 36, "2015": 30,
            "2016": 26, "2017": 28, "2018": 51, "2019": 53, "2020": 47, "2021": 51,
            "2022": 36, "2023": 38, "2024": 31, "2025": 6
        },
        "newsData": {
            2011: {
                headline: "Just hops, skip and a jump away: Black Creek Brewery grows own ingredients for pioneer suds",
                description: "If you wanted to find out what beer tasted like in the 19th century, this is as close as you're going to get, said Black Creek brewmaster Ed Koren, who expects their One-Mile Beer to be ready by Thursday.",
                author: "Josh Rubin",
                source: "Toronto Star"
            }
        }
    },
    {
        "filename": "curity_creek.geojson",
        "name": "curityCreek",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        },
        "yearlyDataJournal": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        }
    },
    {
        "filename": "humber_river.geojson",
        "name": "humberRiver",
        "color": "blue",
        "yearlyData": {
            "2010": 31, "2011": 27, "2012": 35, "2013": 35, "2014": 35, "2015": 35,
            "2016": 38, "2017": 35, "2018": 36, "2019": 54, "2020": 59, "2021": 56,
            "2022": 81, "2023": 59, "2024": 51, "2025": 54
        },
        "yearlyDataJournal": {
            "2010": 52, "2011": 67, "2012": 76, "2013": 66, "2014": 70, "2015": 60,
            "2016": 34, "2017": 37, "2018": 87, "2019": 50, "2020": 87, "2021": 106,
            "2022": 76, "2023": 51, "2024": 39, "2025": 13
        },
        "newsData": {
            2019: {
                headline: "Humber Bay Shores is growing up nicely",
                description: "The Mimico skyline appears like an ever-changing Oz on the horizon.",
                author: "Toronto Star",
                source: "Toronto Star",
                url: "https://www.thestar.com/opinion/contributors/humber-bay-shores-is-growing-up-nicely/article_75f3cfcd-d5d3-579d-b50e-fd736986c1c6.html"
            },
            2021: {
                headline: "Cyberattack brings down Humber River Hospital computers",
                description: "Network shutdown has led to long waits in ER, diagnostic testing.",
                author: "Toronto Star",
                source: "Toronto Star",
                url: "https://www.thestar.com/news/gta/cyberattack-leads-to-computer-system-failure-at-humber-river-hospital-impacting-patient-care/article_7f17d16c-ef38-5ccf-a36b-9b74941c0d1d.html"
            }
        }
    },
    {
        "filename": "smalls_creek.geojson",
        "name": "smallsCreek",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        },
        "yearlyDataJournal": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        }
    },
    {
        "filename": "burke_brook.geojson",
        "name": "burkeBrook",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        },
        "yearlyDataJournal": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 1,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        }
    },
    {
        "filename": "don_river.geojson",
        "name": "donRiver",
        "color": "blue",
        "yearlyData": {
            "2010": 1, "2011": 1, "2012": 8, "2013": 10, "2014": 13, "2015": 12,
            "2016": 10, "2017": 12, "2018": 9, "2019": 6, "2020": 5, "2021": 10,
            "2022": 3, "2023": 7, "2024": 8, "2025": 9
        },
        "yearlyDataJournal": {
            "2010": 45, "2011": 46, "2012": 60, "2013": 55, "2014": 67, "2015": 61,
            "2016": 48, "2017": 28, "2018": 33, "2019": 57, "2020": 41, "2021": 42,
            "2022": 25, "2023": 30, "2024": 49, "2025": 9
        },
        "newsData": {
            2010: {
                headline: "The Don: Many faces, a bad smell the fixer",
                description: "About 600 people in canoes and kayaks traversed the Don River Sunday, with some raising money to be used for river restoration projects.",
                author: "Jack Lakey",
                source: "Toronto Star"
            },
            2013: {
                headline: "'A kid you wished was yours': Victim in Don River drowning was well-loved high school student",
                description: "Tragic drowning incident in the Don River involving a beloved high school student.",
                author: "Barnard, Linda; Bosanac, Alexandra",
                source: "Toronto Star"
            },
            2016: {
                headline: "The dawning of the new Don River Valley Park",
                description: "The Lower Don Trail was closed a long time. Two summers came and went. When it finally reopened last month there was relief, but also great fanfare because it coincided with the opening of the new Don River Valley Park.",
                author: "Toronto Star",
                source: "Toronto Star",
                url: "https://www.thestar.com/news/gta/the-dawning-of-the-new-don-river-valley-park-micallef/article_fd9d24ee-747e-5ae1-b479-6d3906eed155.html"
            },
            2020: {
                headline: "New river valley taking shape: The huge floodproofing project that will transform the east downtown waterfront",
                description: "The huge floodproofing project that will transform the east downtown waterfront is slated to open in April 2024. The Star got a sneak peek at how it's progressing.",
                author: "Toronto Star",
                source: "Toronto Star"
            },
            2024: {
                headline: "Fallen trees, mudslides, missing deer: How Toronto's flood impacted Don Valley wildlife",
                description: "How Toronto's flood impacted Don Valley wildlife — and why finding goldfish has experts worried.",
                author: "Toronto Star",
                source: "Toronto Star",
                url: "https://www.thestar.com/news/gta/fallen-trees-mudslides-missing-deer-how-torontos-flood-impacted-don-valley-wildlife-and-why-finding/article_b46d62aa-4545-11ef-ac84-13dcec5fec39.html"
            }
        }
    },
    {
        "filename": "keating_channel.geojson",
        "name": "keatingChannel",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 1, "2012": 0, "2013": 0, "2014": 1, "2015": 1,
            "2016": 1, "2017": 1, "2018": 0, "2019": 0, "2020": 1, "2021": 1,
            "2022": 1, "2023": 1, "2024": 1, "2025": 1
        },
        "yearlyDataJournal": {
            "2010": 2, "2011": 8, "2012": 4, "2013": 5, "2014": 5, "2015": 11,
            "2016": 7, "2017": 5, "2018": 4, "2019": 6, "2020": 8, "2021": 1,
            "2022": 0, "2023": 0, "2024": 19, "2025": 1
        },
        "newsData": {
            2024: {
                headline: "Rebirth of the Don River: Inside the marvel of engineering that will transform the Port Lands",
                description: "One of the world's biggest civil engineering projects reached a long-anticipated, critical milestone on Friday when the Don River was finally reunited with Lake Ontario through Toronto's inner harbour. It really is a rebirth, said Mayor Olivia Chow.",
                author: "Toronto Star",
                source: "Toronto Star"
            }
        }
    },
    {
        "filename": "taylor_massey_creek.geojson",
        "name": "taylorMasseyCreek",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 1, "2012": 1, "2013": 1, "2014": 1, "2015": 1,
            "2016": 1, "2017": 1, "2018": 1, "2019": 1, "2020": 1, "2021": 1,
            "2022": 1, "2023": 1, "2024": 1, "2025": 1
        },
        "yearlyDataJournal": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 1, "2014": 0, "2015": 0,
            "2016": 2, "2017": 0, "2018": 1, "2019": 1, "2020": 1, "2021": 1,
            "2022": 0, "2023": 1, "2024": 2, "2025": 0
        }
    },
    {
        "filename": "castle_frank_brook.geojson",
        "name": "nordheimerRavine",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 1, "2012": 1, "2013": 1, "2014": 1, "2015": 1,
            "2016": 1, "2017": 1, "2018": 1, "2019": 1, "2020": 1, "2021": 1,
            "2022": 1, "2023": 1, "2024": 1, "2025": 1
        },
        "yearlyDataJournal": {
            "2010": 2, "2011": 0, "2012": 2, "2013": 1, "2014": 1, "2015": 0,
            "2016": 0, "2017": 1, "2018": 2, "2019": 2, "2020": 1, "2021": 3,
            "2022": 5, "2023": 1, "2024": 0, "2025": 0
        },
        "newsData": {
            2013: {
                headline: "Finding the GTA's 'whoosh' spots: Explore some of the most dramatic places to see and feel the city's speed and movement",
                description: "Explore some of the most dramatic places to see and feel the city's speed and movement in Toronto.",
                author: "Shawn Micallef",
                source: "Toronto Star"
            }
        }
    },
    {
        "filename": "mimico_creek.geojson",
        "name": "mimicoCreek",
        "color": "blue",
        "yearlyData": {
            "2010": 1, "2011": 1, "2012": 1, "2013": 1, "2014": 1, "2015": 1,
            "2016": 1, "2017": 1, "2018": 1, "2019": 1, "2020": 1, "2021": 1,
            "2022": 1, "2023": 1, "2024": 1, "2025": 1
        },
        "yearlyDataJournal": {
            "2010": 3, "2011": 3, "2012": 2, "2013": 6, "2014": 3, "2015": 5,
            "2016": 2, "2017": 3, "2018": 6, "2019": 4, "2020": 2, "2021": 4,
            "2022": 3, "2023": 3, "2024": 3, "2025": 1
        },
        "newsData": {
            2015: {
                headline: "Etobicoke oil spill a warning: Ducks in Mimico Creek get a helping hand",
                description: "Any oil spill into any creek is of great concern to all wildlife and nature. The oil from old transformers may contain dioxins and polymeric silicone fluids. Both are hazardous. This particular spill was in the Mimico Creek watershed but not directly into the creek.",
                author: "Toronto Star",
                source: "Toronto Star"
            },
            2021: {
                headline: "Etobicoke wildlife at peril after chemical runoff from fire: 'This is probably the most terrifying thing that's ever happened to them'",
                description: "A number of chemicals seeped into Mimico Creek and Humber River from the industrial site ravaged by a blaze Friday, prompting response from the Toronto Wildlife Centre.",
                author: "Toronto Star",
                source: "Toronto Star",
                url: "https://www.thestar.com/news/gta/etobicoke-wildlife-at-peril-after-chemical-runoff-from-fire-this-is-probably-the-most-terrifying/article_b1a41c5d-c2f0-5b2a-8df4-add2ec522c3e.html"
            }
        }
    },
    {
        "filename": "wilson_brook.geojson",
        "name": "wilsonBrook",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        },
        "yearlyDataJournal": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        }
    },
    {
        "filename": "cudmore_creek.geojson",
        "name": "cudmoreCreek",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        },
        "yearlyDataJournal": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 1, "2023": 0, "2024": 0, "2025": 0
        },
        "newsData": {
            2022: {
                headline: "'It just does seem a bit Grinch-like to me': Donated toys are a big hit with the kids on Toronto playgrounds, but city staff throws them away",
                description: "Donated toys were a big hit with kids and parents at this Toronto playground, but then city staff threw them away.",
                author: "Toronto Star",
                source: "Toronto Star",
                url: "https://www.thestar.com/news/gta/donated-toys-were-a-big-hit-with-kids-and-parents-at-this-toronto-playground-then/article_1466830f-656b-55b0-8463-41be2805e69a.html"
            }
        }
    },
    {
        "filename": "ferris_creek.geojson",
        "name": "ferrisCreek",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        },
        "yearlyDataJournal": {
            "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0, "2015": 0,
            "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        }
    },
    {
        "filename": "mud_creek.geojson",
        "name": "mudCreek",
        "color": "blue",
        "yearlyData": {
            "2010": 1, "2011": 1, "2012": 1, "2013": 1, "2014": 1, "2015": 1,
            "2016": 1, "2017": 1, "2018": 1, "2019": 1, "2020": 1, "2021": 1,
            "2022": 1, "2023": 1, "2024": 1, "2025": 1
        },
        "yearlyDataJournal": {
            "2010": 1, "2011": 1, "2012": 3, "2013": 1, "2014": 2, "2015": 0,
            "2016": 1, "2017": 1, "2018": 1, "2019": 0, "2020": 0, "2021": 2,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        },
        "newsData": {
            2010: {
                headline: "Ecotourists just love Brick Works",
                description: "Heritage site praised by National Geographic for reconnecting the city with the natural world.",
                author: "Katie Daubs",
                source: "Toronto Star"
            }
        }
    },
    {
        "filename": "yellow_creek.geojson",
        "name": "yellowCreek",
        "color": "blue",
        "yearlyData": {
            "2010": 0, "2011": 0, "2012": 1, "2013": 1, "2014": 1, "2015": 1,
            "2016": 1, "2017": 1, "2018": 1, "2019": 1, "2020": 1, "2021": 1,
            "2022": 1, "2023": 1, "2024": 1, "2025": 1
        },
        "yearlyDataJournal": {
            "2010": 1, "2011": 0, "2012": 1, "2013": 0, "2014": 1, "2015": 0,
            "2016": 0, "2017": 0, "2018": 1, "2019": 0, "2020": 1, "2021": 0,
            "2022": 0, "2023": 0, "2024": 0, "2025": 0
        }
    }
];

const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

let currentYearIndex = 0;
let currentYear = years[currentYearIndex];
let isPlaying = false;
let intervalId = null;
let map;

// Helper functions
function formatWaterBodyName(filename) {
    return filename
        .replace('.geojson', '')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
}

function getEffectDescription(value) {
    if (value === 0) {
        return "No references (0) - appears as thin line on the map";
    } else if (value >= 1 && value <= 10) {
        return `Low attention (1-10 references) - appears as medium thickness`;
    } else if (value >= 11 && value <= 40) {
        return `Moderate attention (11-40 references) - appears as thick line`;
    } else {
        return `High attention (40+ references) - appears as very thick line`;
    }
}

let dataSourceType = "google";

function updateUI(year) {
    const totalRefs = geojsonFiles.reduce((sum, f) => {
        const data = dataSourceType === "journal" ? f.yearlyDataJournal : f.yearlyData;
        return sum + (data[year] || 0);
    }, 0);

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
                        const dataSet = dataSourceType === "journal" ? file.yearlyDataJournal : file.yearlyData;
                        const ref = dataSet ? dataSet[currentYear] || 0 : 0;
                        const weight = normalizeValue(ref, 1, 100, 5, 65);
                        return { color: file.color, weight };
                    }
                });

                layer.eachLayer(l => {
                    l.on('mouseover', (e) => {
                        // Get the current data based on selected source
                        const dataSet = dataSourceType === "journal" ? file.yearlyDataJournal : file.yearlyData;
                        const value = dataSet ? dataSet[currentYear] || 0 : 0;
                        const name = formatWaterBodyName(file.filename);
                        const effectDescription = getEffectDescription(value);

                        // Check if there's news data for this water body and year
                        const hasNewsData = file.newsData && file.newsData[currentYear];
                        const newsData = hasNewsData ? file.newsData[currentYear] : null;

                        // Create hover box content
                        let hoverContent = `
              <div style="
                background: #c5f3c4; 
                color: #000000; 
                font-weight: bold; 
                padding: 4px 8px; 
                margin: -8px -12px 8px -12px; 
                border-radius: 6px 6px 0 0;
                font-size: 14px;
              ">
                ${name} in year ${currentYear}:
              </div>
              <div style="
                color: #434343; 
                font-size: 13px; 
                line-height: 1.4;
                margin-bottom: 8px;
              ">
                ${value} reference${value === 1 ? '' : 's'} from ${dataSourceType === 'journal' ? 'Toronto Star' : 'Google Trends'}<br>
                ${effectDescription}
              </div>
            `;

                        // Add newspaper headline if available
                        if (newsData) {
                            hoverContent += `
                <div style="
                  border-top: 1px solid #99d4f2;
                  padding-top: 8px;
                  margin-top: 8px;
                ">
                  <div style="
                    font-weight: bold; 
                    color: #434343; 
                    font-size: 12px;
                    margin-bottom: 4px;
                  ">
                    📰 Featured News:
                  </div>
                  <div style="
                    color: #434343; 
                    font-size: 11px; 
                    line-height: 1.3;
                    font-style: italic;
                  ">
                    "${newsData.headline}"
                  </div>
                  ${newsData.description ? `
                    <div style="
                      color: #666; 
                      font-size: 10px; 
                      margin-top: 4px;
                      line-height: 1.2;
                    ">
                      ${newsData.description.length > 100 ?
                                newsData.description.substring(0, 100) + '...' :
                                newsData.description}
                    </div>
                  ` : ''}
                  <div style="
                    color: #666; 
                    font-size: 10px; 
                    margin-top: 4px;
                  ">
                    — ${newsData.source}${newsData.author && newsData.author !== newsData.source ? `, ${newsData.author}` : ''}
                  </div>
                </div>
              `;
                        }

                        const box = document.getElementById('hover-box');
                        box.innerHTML = hoverContent;

                        // Position the hover box
                        let leftPos = e.originalEvent.pageX + 15;
                        let topPos = e.originalEvent.pageY + 15;

                        // Adjust if too close to edges
                        const boxWidth = hasNewsData ? 350 : 280;
                        const boxHeight = hasNewsData ? 120 : 80;

                        if (leftPos + boxWidth > window.innerWidth) {
                            leftPos = e.originalEvent.pageX - boxWidth - 15;
                        }

                        if (topPos + boxHeight > window.innerHeight) {
                            topPos = e.originalEvent.pageY - boxHeight - 15;
                        }

                        box.style.left = leftPos + 'px';
                        box.style.top = topPos + 'px';
                        box.style.display = 'block';
                        box.style.maxWidth = boxWidth + 'px';
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
        const data = dataSourceType === "journal" ? file.yearlyDataJournal : file.yearlyData;
        const value = data[year] || 0;
        const weight = normalizeValue(value, 1, 100, 5, 65);
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

    // Toggle switch functionality
    const toggleSwitch = document.getElementById('datasource-toggle');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', (e) => {
            dataSourceType = e.target.checked ? "journal" : "google";
            console.log(`Switched to ${dataSourceType} data`);

            // Refresh the map with new data
            refreshLayersForYear(currentYear);
        });
    }

    // Existing event listeners
    document.getElementById('play-btn').addEventListener('click', play);
    document.getElementById('pause-btn').addEventListener('click', pause);
    document.getElementById('timeline').addEventListener('input', (e) => {
        currentYearIndex = parseInt(e.target.value);
        currentYear = years[currentYearIndex];
        refreshLayersForYear(currentYear);
        if (isPlaying) pause();
    });
};
