const Image = require("@11ty/eleventy-img");

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}
function initializeClock(id, endtime) {
  const clock = document.getElementById(id);

  function updateClock(endtime) {
    const t = getTimeRemaining(endtime);

    const calcedDays = t.days;
    const calcedHours = ("0" + t.hours).slice(-2);
    const calcedMintutes = ("0" + t.minutes).slice(-2);
    const calcedSeconds = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }

    return {
      calcedDays,
      calcedHours,
      calcedMintutes,
      calcedSeconds,
    };
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);

  return `
      <div>
        <span class="days countdown-timer__unit"></span>
        <div class="smalltext">Days</div>
      </div>
      <div>
        <span class="hours countdown-timer__unit"></span>
        <div class="smalltext">Hours</div>
      </div>
      <div>
        <span class="minutes countdown-timer__unit"></span>
        <div class="smalltext">Minutes</div>
      </div>
      <div>
        <span class="seconds countdown-timer__unit"></span>
        <div class="smalltext">Seconds</div>
      </div>
    `;
}

async function imageShortcode(src, alt, sizes = "(max-width: 300px) 600px, (max-width: 600px) 1024px, 100vw") {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [600, 1200, null],
    formats: ["webp", "jpeg"],
    outputDir: "./_site/img/",
  });

  let lowsrc = metadata.jpeg[0];

  return `<picture>
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map((entry) => entry.srcset).join(", ")}" sizes="${sizes}">`;
      })
      .join("\n")}
      <img
        src="${lowsrc.url}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>`;
}

async function countdownShortcode(theDate) {
  let timer_date = theDate;
  const deadline = new Date(Date.parse(timer_date));
  initializeClock("clockdiv", deadline);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./_tmp/style.css");

  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addPassthroughCopy("manifest.json");

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  eleventyConfig.addShortcode("today", function () {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    return String(`${day}, ${monthNames[month]} ${year}`);
  });

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("countdownTimer", countdownShortcode);
};
