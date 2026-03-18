var base = "";
var chapter = "";
const PlayerTemplate = `
  <div class="shk-player">
    <div class="shk-bar_wrap">
      <div class="shk-bar" aria-label="progress bar">
        <div class="shk-bar_loaded"
          role="progressbar"
          aria-label="loaded progress"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="1"></div>
        <div class="shk-bar_played"
          role="progressbar"
          aria-label="played progress"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="1">
          <button class="shk-bar-handle"
            role="slider"
            aria-label="seek progress"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-orientation="horizontal"
            aria-valuemax="1"></button>
        </div>
      </div>
    </div>
    <div class="shk-body">
      <div class="shk-cover">
        <div class="shk-img"></div>
      </div>
      <div class="shk-main">
        <div class="shk-text">
          <div class="shk-artist_wrap">
            <span class="shk-artist"></span>
          </div>
          <div class="shk-title_wrap">
            <div class="shk-title_inner">
              <span class="shk-title"></span>
            </div>
          </div>
        </div>
        <div class="shk-controls">
          <div class="shk-controls_basic">
            <button class="shk-btn shk-btn_speed"
              aria-label="toggle playback rate"
              title="change playback rate"
              aria-live="polite">1.0x</button>
            <button class="shk-btn shk-btn_backward"
              aria-label="rewind 10 seconds"
              title="rewind 10 seconds">
              <svg aria-hidden="true">
                <use xlink:href="#shk-icon_backward" />
              </svg>
            </button>
            <button class="shk-btn shk-btn_toggle" aria-label="toggle play and pause">
              <svg class="shk-btn_play" aria-hidden="true">
                <use xlink:href="#shk-icon_play" />
              </svg>
              <svg class="shk-btn_pause" aria-hidden="true">
                <use xlink:href="#shk-icon_pause" />
              </svg>
            </button>
            <button class="shk-btn shk-btn_forward" aria-label="forward 10 seconds" title="forward 10 seconds">
              <svg aria-hidden="true">
                <use xlink:href="#shk-icon_forward" />
              </svg>
            </button>
            <button class="shk-btn shk-btn_more" aria-label="more controls" title="more controls">
              <svg aria-hidden="true">
                <use xlink:href="#shk-icon_more" />
              </svg>
            </button>
          </div>
          <div class="shk-controls_extra">
            <button class="shk-btn shk-btn_volume" aria-label="toggle volume" title="volume">
              <svg class="shk-btn_unmute" aria-hidden="true">
                <use xlink:href="#shk-icon_unmute" />
              </svg>
              <svg class="shk-btn_mute" aria-hidden="true">
                <use xlink:href="#shk-icon_mute" />
              </svg>
            </button>
          </div>
        </div>
        <div class="shk-display">
          <span class="shk-loader" aria-live="polite">
            <span class="shk-visuallyhidden" tabindex="-1">loading</span>
            <svg aria-hidden="true" aria-label="loading" aria-live="polite" viewbox="0 0 66 66">
              <circle cx="33" cy="33" r="30" fill="transparent" stroke="url(#shk-gradient)" stroke-dasharray="170"
                stroke-dashoffset="20" stroke-width="6" />
              <lineargradient id="shk-gradient">
                <stop offset="50%" stop-color="currentColor" />
                <stop offset="65%" stop-color="currentColor" stop-opacity=".5" />
                <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
              </lineargradient>
            </svg>
          </span>
          <span class="shk-time">
            <span class="shk-time_now">00:00</span><span class="shk-time_duration">00:00</span>
          </span>
          <div class="shk-live">live</div>
        </div>
      </div>
    </div>
  </div>
`;
const IconTemplate = `
  <svg class="shk-icons" xmlns="http://www.w3.org/2000/svg">
    <symbol id="shk-icon_play" viewbox="0 0 64 64">
      <path
        d="M32 0a32 32 0 1 1 0 64 32 32 0 0 1 0-64zm-9 17.8c-1 0-1.7.6-1.7 1.4v25.6c0 .8.8 1.4 1.7 1.4 0 0 25-12 26.2-13.1 1-1 .3-1.9.1-2.1z" />
    </symbol>

    <symbol id="shk-icon_pause" viewbox="0 0 64 64">
      <path fill-rule="nonzero"
        d="M32 0a32 32 0 1 0 0 64 32 32 0 0 0 0-64zm-4 40a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V24c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16zm16 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V24c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16z" />
    </symbol>

    <symbol id="shk-icon_download" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </symbol>

    <symbol id="shk-icon_forward" viewbox="0 0 128 139">
      <path
        d="M64 11v14h-.8A50 50 0 1 0 114 75h14a64 64 0 1 1-64-64zm16.9 35c6.6 0 11.8 2.7 15.6 8.3a38 38 0 0 1 5.3 21.4c0 9-1.8 16-5.3 21.3-3.8 5.6-9 8.4-15.6 8.4-6.7 0-12-2.8-15.6-8.4A38 38 0 0 1 60 75.7c0-9 1.8-16.1 5.3-21.4C69 48.7 74.2 46 80.9 46zm-32.5 1v57.1H39V58.3a32.3 32.3 0 0 1-13 7V56a34 34 0 0 0 15.4-9h7zm32.5 7c-4.6 0-7.8 2.4-9.6 7.5-1.3 3.5-2 8.2-2 14.2 0 5.9.7 10.6 2 14.1 1.8 5 5 7.6 9.6 7.6 4.5 0 7.7-2.5 9.6-7.6 1.3-3.5 1.9-8.2 1.9-14.1 0-6-.6-10.7-2-14.2-1.8-5.1-5-7.6-9.5-7.6zM64 0l48 19-48 19V0z" />
    </symbol>

    <symbol id="shk-icon_backward" viewbox="0 0 128 139">
      <path
        d="M64 0v11A64 64 0 1 1 0 75h14a50 50 0 1 0 50-50v13L16 19 64 0zm17 45.8c6.6 0 11.8 2.7 15.6 8.3a38 38 0 0 1 5.3 21.3c0 9-1.8 16.1-5.3 21.4a18 18 0 0 1-15.6 8.3c-6.7 0-12-2.8-15.6-8.3a38 38 0 0 1-5.3-21.4c0-9 1.8-16 5.3-21.3 3.7-5.6 8.9-8.3 15.6-8.3zm-32.4 1V104h-9.4V58.2a32.3 32.3 0 0 1-13 7v-9.4a34 34 0 0 0 15.4-9h7zm32.4 7c-4.6 0-7.8 2.5-9.6 7.6-1.3 3.4-2 8.1-2 14.1s.7 10.7 2 14.2c1.8 5 5 7.6 9.6 7.6 4.5 0 7.7-2.6 9.6-7.6 1.3-3.5 2-8.2 2-14.2s-.7-10.7-2-14.1c-2-5.1-5.1-7.6-9.6-7.6z" />
    </symbol>

    <symbol id="shk-icon_more" viewbox="0 0 64 64">
      <path
        d="M8 24a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm48 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm-24 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 0" />
    </symbol>

    <symbol id="shk-icon_chapter" viewbox="0 0 64 64">
      <path d="M60.8 55.3H18.1a3.2 3.2 0 1 1 0-6.4h42.8a3.2 3.2 0 0 1 3.1 4.9c-.7 1-1.9 1.6-3.1 1.5zm0-20.2H18.1a3.2 3.2 0 1 1 0-6.4h42.8a3.2 3.2 0 1 1 0 6.4zm0-20H18.1a3.2 3.2 0 1 1 0-6.3h42.8a3.2 3.2 0 0 1 0 6.3zM8.5 12.3a4.2 4.2 0 1 1-8.5 0 4.2 4.2 0 0 1 8.5 0zm0 19.8A4.2 4.2 0 1 1 0 32a4.2 4.2 0 0 1 8.5 0zm0 19.8a4.3 4.3 0 1 1-8.5 0 4.3 4.3 0 0 1 8.5 0zm0 0"/>
    </symbol>

    <symbol id="shk-icon_unmute" viewBox="0 0 64 66">
      <path d="M34.3 0c1.5.1 2.6 1.4 2.9 2.8v60.3c-.3 1.4-1.4 2.7-3 2.8-.7.1-1.6-.1-2.6-.7L13.7 50H4.2a4 4 0 0 1-4.1-4V20.6c0-2.2 1.8-4 4-4.1h9.6c.7-.8 17.2-15.1 17.9-15.8 1-.6 1.9-.8 2.6-.7zm6.4 9.3a2 2 0 0 1 2.4-1.6 25.8 25.8 0 0 1 0 50.5l-.4.1a2 2 0 1 1-.4-4.1 21.7 21.7 0 0 0 0-42.5 2 2 0 0 1-1.6-2.4zm4.7 12.8a12.1 12.1 0 0 1 0 21.8 2 2 0 0 1-2.8-1c-.5-1-.1-2.2 1-2.8a8 8 0 0 0 0-14.4 2 2 0 0 1-1-2.7 2 2 0 0 1 2.8-.9zm0 0"/>
    </symbol>

    <symbol id="shk-icon_mute" viewBox="0 0 64 64">
      <path d="M33.2 0c-.8 0-1.6.1-2.6.7l-17.4 15H4a4 4 0 0 0-4 4v24.1a4 4 0 0 0 4 4h9.2l17.4 14.5c1 .6 1.8.8 2.6.7 1.4-.1 2.5-1.4 2.8-2.6V2.7C35.7 1.4 34.6 0 33.2 0zm23.2 31.5l6.9-6.8c.7-.6 1-1.5.7-2.4-.2-.8-.9-1.5-1.8-1.7-.8-.2-1.8 0-2.4.7L53 28.1 46 21.3c-.6-.6-1.5-1-2.4-.7-.9.2-1.5.9-1.8 1.7-.2.9.1 1.8.8 2.4l6.9 6.8-7 6.8c-.8 1-.8 2.4.2 3.3.9 1 2.4 1 3.3.1l7-6.8 6.8 6.8c1 .9 2.5.8 3.4 0 1-1 1-2.4 0-3.4l-6.8-6.8zm0 0"/>
    </symbol>

    <symbol id="shk-icon_triangle" viewbox="0 0 64 64"><path d="M59 29.2L7.8.4A3.2 3.2 0 003 3.2v57.6a3.2 3.2 0 004.8 2.8L59 34.8a3.2 3.2 0 000-5.6z" /></symbol>
    <symbol id="shk-icon_chart" viewbox="0 0 64 64"><g transform="matrix(1 0 0 -1 0 64)"><rect x="10" width="8" height="54.1" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="64;55;33;5;60;23;58;33;12;14;52;64" calcMode="linear" repeatCount="indefinite"/></rect><rect x="26" width="8" height="32.8" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="50;34;64;23;56;23;34;4;64;54;21;50" calcMode="linear" repeatCount="indefinite"/></rect><rect x="42" width="8" height="42.6" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;64;56;24;45;64;34;23;64;30" calcMode="linear" repeatCount="indefinite"/></rect></g></symbol>
    <symbol id="shk-icon_close" viewbox="0 0 16 16"><path d="M3.207 14.207a1 1 0 1 1-1.414-1.414l11-11a1 1 0 0 1 1.414 1.414zm11-1.414a1 1 0 0 1-1.414 1.414l-11-11a1 1 0 0 1 1.414-1.414z"></path></symbol>
  </svg>
`;
const DEFAULT = {
  container: () => document.querySelector("body"),
  parser: null,
  fixed: {
    type: "auto",
    position: "bottom"
  },
  download: false,
  themeColor: "#0d6efd",
  theme: "auto",
  autoPlay: false,
  muted: false,
  preload: "metadata",
  speedOptions: [0.5, 0.75, 1, 1.25, 1.5],
  audio: null
};
const CONFIG = {
  fixedOptions: ["auto", "static", "fixed"],
  audioOptions: {
    title: "Unknown Title",
    artist: "Unknown Artist",
    duration: NaN,
    cover: null,
    chapters: [],
    src: null,
    album: "",
    live: false
  }
};
function secondToTime(time) {
  time = Math.round(time);
  let hour = Math.floor(time / 3600);
  let min = Math.floor((time - hour * 3600) / 60);
  let sec = Math.floor(time - hour * 3600 - min * 60);
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  if (hour === 0) {
    return `${min}:${sec}`;
  }
  hour = hour < 10 ? "0" + hour : hour;
  return `${hour}:${min}:${sec}`;
}
function numToString(num) {
  const float = parseFloat(num).toFixed(2);
  return float.slice(-1) === "0" ? float.slice(0, -1) : float;
}
function marquee(textWrap, textEl, speed = 60) {
  const overflow = textEl.offsetWidth - textWrap.offsetWidth;
  if (overflow > 0) {
    textWrap.setAttribute("data-overflow", "");
    const duration = textEl.offsetWidth / speed;
    textWrap.style.animationDuration = `${duration}s`;
  } else {
    textWrap.removeAttribute("data-overflow");
  }
}
function handleOptions(options) {
  const _options = Object.assign({}, options);
  _options.audio = Object.assign({}, options.audio);
  Object.keys(DEFAULT).forEach((k) => {
    _options[k] = _options[k] || typeof _options[k] === "boolean" ? _options[k] : DEFAULT[k];
  });
  if (typeof _options.container === "function") {
    _options.container = _options.container();
  }
  const fixedType = CONFIG.fixedOptions.find((item) => item === _options.fixed.type);
  if (!fixedType) {
    _options.fixed.type = DEFAULT.fixed.type;
  }
  if (!Array.isArray(_options.speedOptions)) {
    _options.speedOptions = [_options.speedOptions];
  }
  if (_options.speedOptions.indexOf(1) === -1) {
    _options.speedOptions.push(1);
  }
  _options.speedOptions = _options.speedOptions.map((sp) => parseFloat(sp)).filter((sp) => !isNaN(sp));
  if (_options.speedOptions.length > 1) {
    _options.speedOptions.sort((a, b) => a - b);
  }
  return _options;
}
function handleAudio(audio = {}, parsedData = {}) {
  let audioData = Object.assign({}, audio);
  Object.keys(CONFIG.audioOptions).forEach((k) => {
    audioData[k] = audioData[k] || parsedData[k] || CONFIG.audioOptions[k];
  });
  return audioData;
}
async function parseAudio(audio = {}, parser = {}) {
  const { tags } = await parserWrap(audio.src, parser) || {};
  const tagData = handleParsedTags(tags);
  return handleAudio(audio, tagData);
}
function parserWrap(src, parser) {
  return new Promise((resolve, reject) => {
    parser.read(src, {
      onSuccess: resolve,
      onError: reject
    });
  });
}
function handleParsedTags(tags = {}) {
  let cover, chapters, duration;
  const { title, artist } = tags;
  if (tags.picture && tags.picture.data && tags.picture.format) {
    const byteArray = new Uint8Array(tags.picture.data);
    const blob = new Blob([byteArray], { type: tags.picture.format });
    cover = URL.createObjectURL(blob);
  }
  if (tags.TLEN && tags.TLEN.data) {
    duration = +tags.TLEN.data / 1e3;
  }
  if (tags.CHAP && tags.CHAP.length) {
    chapters = tags.CHAP.filter((ch) => ch.id === "CHAP").map((ch) => {
      if (ch.data && ch.data.subFrames && ch.data.subFrames.TIT2) {
        return {
          id: ch.data.id,
          startTime: ch.data.startTime / 1e3,
          endTime: ch.data.endTime / 1e3,
          title: ch.data.subFrames.TIT2.data
        };
      }
      return false;
    }).sort((a, b) => a.id - b.id);
  }
  return { title, artist, cover, duration, chapters };
}
function createElement(options) {
  options.tag = options.tag || "div";
  const el = document.createElement(options.tag);
  if (options.className) {
    if (typeof options.className === "string") {
      el.classList.add(options.className);
    } else {
      options.className.forEach((className) => {
        el.classList.add(className);
      });
    }
  }
  if (options.attrs) {
    Object.keys(options.attrs).forEach((key) => {
      el.setAttribute(key, options.attrs[key]);
    });
  }
  if (options.innerHTML) {
    el.innerHTML = options.innerHTML;
  }
  return el;
}
function toggleAttribute(el, name, val) {
  if (typeof val === "boolean") {
    val ? el.setAttribute(name, "") : el.removeAttribute(name);
    return;
  }
  if (typeof el.toggleAttribute === "function") {
    el.toggleAttribute(name);
  } else {
    el.hasAttribute(name) ? el.removeAttribute(name) : el.setAttribute(name, "");
  }
}
function animateScroll(timestamp, startTime, duration, startPos, distance, scrollEl) {
  const elapsed = (timestamp - startTime) / 1e3;
  const t = elapsed / duration;
  scrollEl.scrollTop = startPos + distance * t;
  if (t < 1) {
    window.requestAnimationFrame((ts) => {
      animateScroll(ts, startTime, duration, startPos, distance, scrollEl);
    });
  }
}
function applyFocusVisiblePolyfill(parent, supportsPassive2) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
      return true;
    }
    return false;
  }
  function addFocusVisibleClass(el) {
    if (el.classList.contains("focus-visible")) {
      return;
    }
    el.classList.add("focus-visible");
    el.setAttribute("data-focus-visible-added", "");
  }
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute("data-focus-visible-added")) {
      return;
    }
    el.classList.remove("focus-visible");
    el.removeAttribute("data-focus-visible-added");
  }
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(document.activeElement) && parent.contains(document.activeElement)) {
      addFocusVisibleClass(document.activeElement);
    }
    hadKeyboardEvent = true;
  }
  function onPointerDown() {
    hadKeyboardEvent = false;
  }
  function onFocus(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent) {
      addFocusVisibleClass(e.target);
    }
  }
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  function onVisibilityChange() {
    if (document.visibilityState === "hidden") {
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }
  function addInitialPointerMoveListeners() {
    parent.addEventListener("mousemove", onInitialPointerMove);
    parent.addEventListener("mousedown", onInitialPointerMove);
    parent.addEventListener("mouseup", onInitialPointerMove);
    parent.addEventListener("pointermove", onInitialPointerMove);
    parent.addEventListener("pointerdown", onInitialPointerMove);
    parent.addEventListener("pointerup", onInitialPointerMove);
    parent.addEventListener("touchmove", onInitialPointerMove, supportsPassive2 ? { passive: true } : false);
    parent.addEventListener("touchstart", onInitialPointerMove, supportsPassive2 ? { passive: true } : false);
    parent.addEventListener("touchend", onInitialPointerMove, supportsPassive2 ? { passive: true } : false);
  }
  function removeInitialPointerMoveListeners(el) {
    parent.removeEventListener("mousemove", onInitialPointerMove);
    parent.removeEventListener("mousedown", onInitialPointerMove);
    parent.removeEventListener("mouseup", onInitialPointerMove);
    parent.removeEventListener("pointermove", el);
    parent.removeEventListener("pointerdown", onInitialPointerMove);
    parent.removeEventListener("pointerup", onInitialPointerMove);
    parent.removeEventListener("touchmove", onInitialPointerMove, supportsPassive2 ? { passive: true } : false);
    parent.removeEventListener("touchstart", onInitialPointerMove, supportsPassive2 ? { passive: true } : false);
    parent.removeEventListener("touchend", onInitialPointerMove, supportsPassive2 ? { passive: true } : false);
  }
  function onInitialPointerMove() {
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }
  parent.addEventListener("keydown", onKeyDown, true);
  parent.addEventListener("mousedown", onPointerDown, true);
  parent.addEventListener("pointerdown", onPointerDown, true);
  parent.addEventListener("touchstart", onPointerDown, supportsPassive2 ? { passive: true, capture: true } : true);
  parent.addEventListener("visibilitychange", onVisibilityChange, true);
  addInitialPointerMoveListeners();
  parent.addEventListener("focus", onFocus, true);
  parent.addEventListener("blur", onBlur, true);
  parent.classList.add("js-focus-visible");
}
let resize$1, coverUrl = null;
let cooldown = true;
class UI {
  constructor(options) {
    this.mounted = false;
    this.icons = createElement({
      className: "shk-icons",
      innerHTML: IconTemplate
    });
    this.initEl();
    this.initOptions(options);
  }
  async initEl() {
    this.el = createElement({
      className: ["shk", "shikwasa"],
      attrs: {
        "data-name": "shikwasa"
      },
      innerHTML: PlayerTemplate
    });
    this.playBtn = this.el.querySelector(".shk-btn_toggle");
    this.fwdBtn = this.el.querySelector(".shk-btn_forward");
    this.bwdBtn = this.el.querySelector(".shk-btn_backward");
    this.speedBtn = this.el.querySelector(".shk-btn_speed");
    this.moreBtn = this.el.querySelector(".shk-btn_more");
    this.muteBtn = this.el.querySelector(".shk-btn_volume");
    this.extraControls = this.el.querySelector(".shk-controls_extra");
    this.texts = this.el.querySelector(".shk-text");
    this.artist = this.el.querySelector(".shk-artist");
    this.artistWrap = this.el.querySelector(".shk-artist_wrap");
    this.titleWrap = this.el.querySelector(".shk-title_wrap");
    this.titleInner = this.el.querySelector(".shk-title_inner");
    this.title = this.el.querySelector(".shk-title");
    this.currentTime = this.el.querySelector(".shk-time_now");
    this.duration = this.el.querySelector(".shk-time_duration");
    this.bar = this.el.querySelector(".shk-bar");
    this.barWrap = this.el.querySelector(".shk-bar_wrap");
    this.audioPlayed = this.el.querySelector(".shk-bar_played");
    this.audioLoaded = this.el.querySelector(".shk-bar_loaded");
    this.handle = this.el.querySelector(".shk-bar-handle");
    this.cover = this.el.querySelector(".shk-cover");
    this.seekControls = [this.fwdBtn, this.bwdBtn, this.handle];
  }
  initOptions(options) {
    this.el.style = `--color-primary: ${options.themeColor}`;
    this.el.setAttribute("data-theme", options.theme);
    if (options.download && options.audio && options.audio.src) {
      this.downloadBtn = createElement({
        tag: "a",
        className: ["shk-btn", "shk-btn_download"],
        attrs: {
          title: "download",
          "aria-label": "download",
          href: typeof options.download === "string" ? options.download : options.audio.src,
          download: "",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        innerHTML: `
          <svg aria-hidden="true">
            <use xlink:href="#shk-icon_download" />
          </svg>
        `
      });
      this.extraControls.append(this.downloadBtn);
    }
    this.el.setAttribute("data-fixed-type", options.fixed.type);
    if (options.fixed.type !== "static" && options.fixed.position === "top") {
      this.el.setAttribute("data-fixed-pos", options.fixed.position);
    }
    options.autoPlay ? this.setPlaying() : this.setPaused();
    if (options.muted) {
      this.setMute(options.muted);
    }
  }
  initEvents(supportsPassive2) {
    this.moreBtn.addEventListener("click", () => {
      toggleAttribute(this.el, "data-extra");
    });
    Array.from(this.extraControls.children).forEach((el) => {
      this.hideExtraControl(el);
    });
    applyFocusVisiblePolyfill(this.el, supportsPassive2);
    resize$1 = () => {
      if (!cooldown)
        return;
      cooldown = false;
      setTimeout(() => cooldown = true, 100);
      marquee.call(this, this.titleWrap, this.title);
    };
    window.addEventListener("resize", resize$1);
  }
  setAudioInfo(audio = {}) {
    if (coverUrl) {
      URL.revokeObjectURL(coverUrl);
      coverUrl = null;
    }
    if (/blob/.test(audio.cover)) {
      coverUrl = audio.cover;
    }
    if (audio.cover) {
      this.cover.style.backgroundImage = `url(${audio.cover})`;
    } else {
      this.cover.style.backgroundImage = "none";
    }
    this.title.innerHTML = audio.title;
    this.titleInner.setAttribute("data-title", audio.title);
    this.artist.innerHTML = audio.artist;
    if (audio.duration) {
      this.duration.innerHTML = secondToTime(audio.duration);
    }
    if (this.downloadBtn) {
      this.downloadBtn.href = audio.src;
    }
    this.setBar("loaded", 0);
    this.setLive(audio.live);
    marquee(this.titleWrap, this.title);
  }
  setPlaying() {
    this.el.setAttribute("data-play", "playing");
  }
  setPaused() {
    this.el.setAttribute("data-play", "paused");
    this.setLoading(false);
  }
  setTime(type, time) {
    this[type].innerHTML = secondToTime(time);
  }
  setBar(type, percentage) {
    const typeName = "audio" + type.charAt(0).toUpperCase() + type.substr(1);
    percentage = Math.min(percentage, 1);
    percentage = Math.max(percentage, 0);
    this[typeName].style.width = percentage * 100 + "%";
    const ariaNow = percentage.toFixed(2);
    this[typeName].setAttribute("aria-valuenow", ariaNow);
    this.handle.setAttribute("aria-valuenow", ariaNow);
  }
  setProgress(time = 0, percentage = 0, duration = 0) {
    if (time && !percentage) {
      percentage = duration ? time / duration : 0;
    } else {
      time = percentage * (duration || 0);
    }
    this.setTime("currentTime", time);
    this.setBar("played", percentage);
  }
  setSpeed(speed) {
    this.speedBtn.innerHTML = numToString(speed) + "x";
  }
  setMute(mute) {
    toggleAttribute(this.el, "data-mute", mute);
  }
  setLive(live = false) {
    toggleAttribute(this.el, "data-live", live);
  }
  setLoading(loading) {
    toggleAttribute(this.el, "data-loading", loading);
  }
  setSeeking(seeking) {
    toggleAttribute(this.el, "data-seeking", seeking);
  }
  setControls(allowControl) {
    this.seekControls.forEach((el) => {
      toggleAttribute(el, "disabled", !allowControl);
    });
  }
  getPercentByPos(e) {
    const handlePos = e.clientX || e.changedTouches && e.changedTouches[0].clientX || 0;
    const initPos = this.barWrap.getBoundingClientRect().left;
    const barLength = this.barWrap.clientWidth;
    let percentage = (handlePos - initPos) / barLength;
    percentage = Math.min(percentage, 1);
    percentage = Math.max(0, percentage);
    return percentage;
  }
  hideExtraControl(el) {
    el.addEventListener("click", () => {
      setTimeout(() => {
        this.el.removeAttribute("data-extra");
      }, 800);
    });
  }
  mount(container, supportsPassive2) {
    container.innerHTML = "";
    container.append(this.el);
    if (this.icons) {
      container.append(this.icons);
    }
    this.mounted = true;
    this.initEvents(supportsPassive2);
    marquee(this.titleWrap, this.title);
  }
  destroy() {
    window.removeEventListener("resize", resize$1);
    if (coverUrl) {
      URL.revokeObjectURL(coverUrl);
    }
  }
}
class Events {
  constructor() {
    this.audioEvents = ["abort", "canplay", "canplaythrough", "complete", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"];
    this.playerEvents = ["audioupdate", "audioparse"];
    this.events = {};
  }
  on(name, callback) {
    if (this.type(name) && typeof callback == "function") {
      if (!this.events[name]) {
        this.events[name] = [];
      }
      this.events[name].push(callback);
    }
  }
  trigger(name, data = {}) {
    if (this.events[name] && this.events[name].length) {
      this.events[name].forEach((fn) => fn(data));
    }
  }
  type(name) {
    if (this.playerEvents.indexOf(name) !== -1) {
      return "player";
    } else if (this.audioEvents.indexOf(name) !== -1) {
      return "audio";
    }
    console.error(`Shikwasa: unknown event name: ${name}`);
    return null;
  }
  destroy() {
    this.events = {};
  }
}
const playerArr = [];
const REGISTERED_COMPS = [];
const isMobile = typeof window !== "undefined" ? /mobile/i.test(window.navigator.userAgent) : false;
const dragStart = isMobile ? "touchstart" : "mousedown";
const dragMove = isMobile ? "touchmove" : "mousemove";
const dragEnd = isMobile ? "touchend" : "mouseup";
let supportsPassive = false;
if (typeof window !== "undefined") {
  try {
    const opts = Object.defineProperty({}, "passive", {
      get: function() {
        supportsPassive = true;
        return false;
      }
    });
    window.addEventListener("testPassvie", null, opts);
    window.removeEventListener("testPassvie", null, opts);
  } catch (e) {
    supportsPassive = false;
  }
}
const addPassive = supportsPassive && isMobile;
class Player {
  constructor(options) {
    this.id = playerArr.length;
    playerArr.push(this);
    this.comps = {};
    this._audio = {};
    this._hasMediaSession = false;
    this._initSeek = 0;
    this.live = false;
    this._canplay = false;
    this._dragging = false;
    this.events = new Events();
    this.options = handleOptions(options);
    this.renderComponents();
    this.initUI(this.options);
    this.initAudio();
    this.ui.mount(this.options.container, supportsPassive);
  }
  get duration() {
    if (!this.audio || !this.audio.duration) {
      return this._audio.duration;
    }
    return this.audio.duration;
  }
  get seekable() {
    return !this.live && Boolean(this.duration);
  }
  set seekable(v) {
    this.ui.setControls(v);
  }
  get currentTime() {
    return this.audio ? this.audio.currentTime : void 0;
  }
  get playbackRate() {
    return this.audio ? this.audio.playbackRate : void 0;
  }
  set playbackRate(v) {
    if (this.audio) {
      this.audio.playbackRate = v;
      this.audio.defaultPlaybackRate = v;
      this.ui.setSpeed(v);
    }
  }
  get muted() {
    return this.audio ? this.audio.muted : void 0;
  }
  set muted(v) {
    if (this.audio) {
      this.audio.muted = v;
      this.audio.defaultMuted = v;
      this.ui.setMute(v);
    }
  }
  initUI() {
    this.ui = new UI(this.options);
    this.el = this.ui.el;
    this.initControlEvents();
    this.initBarEvents();
  }
  initControlEvents() {
    this.ui.playBtn.addEventListener("click", () => {
      this.toggle();
    });
    this.ui.muteBtn.addEventListener("click", () => {
      this.muted = !this.muted;
    });
    this.ui.fwdBtn.addEventListener("click", () => {
      this.seekBySpan();
    });
    this.ui.bwdBtn.addEventListener("click", () => {
      this.seekBySpan({ forward: false });
    });
    this.ui.speedBtn.addEventListener("click", () => {
      const index = this.options.speedOptions.indexOf(this.playbackRate);
      const speedRange = this.options.speedOptions;
      this.playbackRate = index + 1 >= speedRange.length ? speedRange[0] : speedRange[index + 1];
    });
  }
  initBarEvents() {
    let targetTime = 0;
    const dragStartHandler = (e) => {
      if (!this.seekable)
        return;
      e.preventDefault();
      this.ui.setSeeking(true);
      this._dragging = true;
      document.addEventListener(dragMove, dragMoveHandler, addPassive ? { passive: true } : false);
      document.addEventListener(dragEnd, dragEndHandler);
    };
    const dragMoveHandler = (e) => {
      this.ui.setProgress(null, this.ui.getPercentByPos(e), this.duration);
    };
    const dragEndHandler = (e) => {
      e.preventDefault();
      document.removeEventListener(dragMove, dragMoveHandler);
      document.removeEventListener(dragEnd, dragEndHandler);
      targetTime = this.ui.getPercentByPos(e) * this.duration;
      this.seek(targetTime);
      this._dragging = false;
      setTimeout(() => this.ui.setSeeking(false), 50);
    };
    const keydownHandler = (e) => {
      if (!this.seekable)
        return;
      const key = e.key.replace("Arrow", "");
      const backwardKeys = ["Left", "Down"];
      const forwardKeys = ["Right", "Up"];
      const largeStepKeys = ["PageDown", "PageUp"];
      const edgeKeys = ["Home", "End"];
      const isBack = backwardKeys.indexOf(key) !== -1;
      const isFwd = forwardKeys.indexOf(key) !== -1;
      const isWayBack = key === largeStepKeys[0];
      const isWayFwd = key === largeStepKeys[1];
      const isStart = key === edgeKeys[0];
      const isEnd = key === edgeKeys[1];
      if (!isBack && !isFwd && largeStepKeys.indexOf(key) === -1 && edgeKeys.indexOf(key) === -1) {
        return;
      }
      if (isStart) {
        this.seek(0);
        return;
      }
      if (isEnd) {
        this.seek(this.duration);
        return;
      }
      const step = (isWayFwd || isWayBack ? 0.1 : 0.01) * (isFwd || isWayFwd ? 1 : -1);
      const currentTime = this._canplay ? this.currentTime : this._initSeek;
      const time = step * this.duration + currentTime;
      this.seek(time);
    };
    this.ui.barWrap.addEventListener(dragStart, dragStartHandler);
    this.ui.handle.addEventListener("keydown", keydownHandler);
  }
  initAudio() {
    if (this.options.audio.src) {
      this.audio = new Audio();
      this.initAudioEvents();
      this.events.audioEvents.forEach((name) => {
        this.audio.addEventListener(name, (e) => {
          this.events.trigger(name, e);
        });
      });
      this.audio.preload = this.options.preload;
      this.muted = this.options.muted;
      this.update(this.options.audio);
    }
  }
  initAudioEvents() {
    this.on("play", () => {
      this.ui.setPlaying();
      playerArr.forEach((player) => {
        if (player.id !== this.id && player.audio && !player.audio.paused) {
          player.pause();
        }
      });
    });
    this.on("pause", () => {
      this.ui.setPaused();
    });
    this.on("ended", () => {
      this.ui.setPaused();
      this.seek(0);
    });
    this.on("waiting", () => {
      this.ui.setLoading(true);
    });
    this.on("durationchange", () => {
      if (this.duration !== Infinity && this.live) {
        this.live = false;
      }
      if (this.duration && this.duration !== 1 && this.duration !== Infinity) {
        this.seekable = true;
        this.ui.setTime("duration", this.duration);
      }
    });
    this.on("canplay", () => {
      if (!this._canplay) {
        this._canplay = true;
        if (this._initSeek) {
          this.seek(this._initSeek);
          this._initSeek = 0;
        }
      }
      if (this.duration === Infinity && !this.live) {
        this.live = true;
        this.ui.setLive(this.live);
      }
    });
    this.on("canplaythrough", () => {
      this.ui.setLoading(false);
    });
    this.on("progress", () => {
      if (this.audio.buffered.length) {
        const percentage = this.audio.buffered.length ? this.audio.buffered.end(this.audio.buffered.length - 1) / this.duration : 0;
        this.ui.setBar("loaded", percentage);
      }
    });
    this.on("timeupdate", () => {
      if (!this._dragging) {
        this.ui.setProgress(this.audio.currentTime, null, this.duration);
      }
    });
    this.on("abort", () => {
      this.ui.setPaused();
    });
    this.on("audioupdate", (audio) => {
      this.seekable = audio.duration && audio.duration !== Infinity;
      this.updateMetadata(audio);
    });
    this.on("audioparse", (audio) => {
      this.seekable = audio.duration && audio.duration !== Infinity;
      this.updateMetadata(audio);
    });
  }
  initMediaSession() {
    const self = this;
    if ("mediaSession" in navigator) {
      this._hasMediaSession = true;
      this.setMediaMetadata(this._audio);
      const controls = {
        play: this.play.bind(self),
        pause: this.pause.bind(self),
        seekforward: this.seekBySpan.bind(self),
        seekbackward: () => this.seekBySpan({ forward: false }),
        seekto: this.seek.bind(self)
      };
      Object.keys(controls).forEach((key) => {
        navigator.mediaSession.setActionHandler(key, controls[key]);
      });
    }
  }
  setMediaMetadata(audio) {
    const artwork = audio.cover ? [{ src: audio.cover, sizes: "150x150" }] : void 0;
    if ("MediaMetadata" in window) {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: audio.title,
        artist: audio.artist,
        album: audio.album,
        artwork
      });
    }
  }
  on(name, callback) {
    this.events.on(name, callback);
  }
  play() {
    if (!this.audio.paused)
      return;
    const promise = this.audio.play();
    if (promise instanceof Promise) {
      promise.then(() => {
        this.initMediaSession();
      });
      promise.catch((e) => {
        if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
          this.pause();
        }
      });
    } else {
      this.initMediaSession();
    }
    return promise;
  }
  pause() {
    if (this.audio.paused)
      return;
    this.audio.pause();
  }
  toggle() {
    return this.audio.paused ? this.play() : this.pause();
  }
  seek(time) {
    if (!this.seekable)
      return;
    time = parseInt(time);
    if (isNaN(time)) {
      console.error("Shikwasa: seeking time is NaN");
    }
    time = Math.min(time, this.duration);
    time = Math.max(time, 0);
    this.ui.setProgress(time, null, this.duration);
    if (!this._canplay) {
      this._initSeek = time;
    } else {
      this.audio.currentTime = time;
    }
  }
  seekBySpan({ time = 10, forward = true } = {}) {
    const currentTime = this._canplay ? this.audio.currentTime : this._initSeek;
    const targetTime = currentTime + time * (forward ? 1 : -1);
    this.seek(targetTime);
  }
  update(audio) {
    if (audio && audio.src) {
      this._audio = handleAudio(audio);
      this.live = this._audio.live;
      this._canplay = false;
      this.audio.src = this._audio.src;
      this.events.trigger("audioupdate", this._audio);
      const metaIncomplete = !audio.title || !audio.artist || !audio.cover || !audio.chapters;
      if (!this.live && this.options.parser && metaIncomplete) {
        parseAudio(Object.assign({}, audio), this.options.parser).then((audioData) => {
          this._audio = audioData || this._audio;
          this.events.trigger("audioparse", this._audio);
        });
      }
    } else {
      throw new Error("Shikwasa: audio source is not specified");
    }
  }
  updateMetadata(audio) {
    this.audio.title = audio.title;
    this.ui.setAudioInfo(audio);
    if (this._hasMediaSession) {
      this.setMediaMetadata(audio);
    }
  }
  destroyAudio() {
    this.audio.pause();
    this.audio.src = "";
    this.audio.load();
    this.audio = null;
  }
  destroy() {
    this.events.destroy();
    this.destroyAudio();
    this.ui.destroy();
    Object.keys(this.comps).forEach((k) => {
      if (this.comps[k].destroy && typeof this.comps[k].destroy === "function") {
        this.comps[k].destroy();
      }
    });
    this.comps = null;
    this.options.container.innerHTML = "";
  }
  renderComponents() {
    if (!REGISTERED_COMPS.length)
      return;
    REGISTERED_COMPS.forEach((comp) => {
      this.comps[comp._name] = new comp(this);
    });
  }
}
Player.use = function(comp) {
  REGISTERED_COMPS.push(comp);
};
const chapterTemplate = `
  <div class="shk-chapter_main">
    <ol class="shk-chapter_list"></ol>
  </div>
  <button class="shk-btn shk-btn_close" aria-label="close chapter panel" title="close chapter panel">
    <svg class="shk-icon_close" aria-hidden="true">
      <use xlink:href="#shk-icon_close" />
    </svg>
  </button>
`;
let resize;
class Chapter {
  constructor(ctx) {
    this.ctx = ctx;
    this.list = [];
    this.initEvents();
    this.current = null;
    this._currentSrc = null;
    this._chapterPatched = false;
  }
  init() {
    this.patchPlayer();
    this.ui = new ChapterUI(this.ctx);
    this.ctx.on("chapterchange", (data) => {
      const id = data && data.newVal ? data.newVal.id : null;
      this.ui.setChapterActive(id);
    });
  }
  initEvents() {
    this.ctx.on("audioupdate", (audio) => {
      if (!this._chapterPatched) {
        this.init();
        this._chapterPatched = true;
      }
      this.updateList(audio);
    });
    this.ctx.on("audioparse", (audio) => {
      this.updateList(audio);
    });
    this.ctx.on("timeupdate", this.onTimeupdate.bind(this));
  }
  clearList() {
    this.ui.chapterList.innerHTML = "";
    this.list = [];
    this.current = null;
  }
  updateList(audio) {
    if (this.list.length) {
      this.clearList();
    }
    if (audio.chapters.length) {
      this.list = this.handleChapters(audio);
      this.ui.renderChapterList(this.ctx.chapters);
      this.clickChapterHandler();
    }
    this.ui.handleChapterPanel(this.ctx, audio);
  }
  handleChapters(audio) {
    if (audio.chapters && audio.chapters.length) {
      return audio.chapters.map((chap, i) => {
        if (!/^ch\d+$/.test(chap.id)) {
          chap.id = `ch${i}`;
        }
        return chap;
      });
    }
  }
  patchPlayer() {
    const self = this;
    Object.defineProperties(this.ctx, {
      chapters: {
        get() {
          return self.list;
        }
      },
      currentChapter: {
        get() {
          return self.current;
        }
      }
    });
    this.ctx.events.playerEvents.push("chapterchange");
    this.ctx.updateChapter = updateChapter.bind(self);
    function updateChapter(index) {
      this.setCurrent(this.list[index]);
      this.ctx.seek(this.current.startTime);
      this.ctx.play();
    }
  }
  setCurrent(chapter2) {
    const _oldCurrentChapter = this.current ? { ...this.current } : null;
    this.current = chapter2;
    this.ctx.events.trigger("chapterchange", {
      newVal: this.current,
      oldVal: _oldCurrentChapter
    });
  }
  onTimeupdate(e) {
    if (this._currentSrc !== e.currentTarget.src) {
      this._currentSrc = e.currentTarget.src;
      return;
    }
    const direction = this.searchDirection(this.ctx.currentTime, this.current);
    if (direction) {
      let searchPool;
      const index = this.list.indexOf(this.current);
      if (index === -1) {
        searchPool = this.list;
      } else {
        searchPool = direction === 1 ? this.list.slice(index) : this.list.slice(0, index + 1);
      }
      const currentChapter = searchPool.find((ch) => {
        return !this.searchDirection(this.ctx.currentTime, ch);
      });
      this.setCurrent(currentChapter);
    }
  }
  searchDirection(time, chapter2) {
    time = Math.round(time);
    if (!chapter2 || typeof chapter2 !== "object" || chapter2.endTime <= time) {
      return 1;
    }
    if (chapter2.startTime > time) {
      return -1;
    }
    return 0;
  }
  clickChapterHandler() {
    Array.from(this.ui.chapterList.children).forEach((chEl) => {
      chEl.addEventListener("click", () => {
        if (!this.ctx.seekable)
          return;
        let id = chEl.getAttribute("data-id").match(/\d+$/);
        if (id) {
          this.ctx.updateChapter(+id[0]);
        }
      });
    });
  }
  destroy() {
    this.ui.destroy();
  }
}
class ChapterUI {
  constructor(player, audio) {
    this.initEl(player);
    this.initEvents(player, audio);
    this.renderChapterList(player.chapters);
    player.ui.el.append(this.el);
    this.activeChapterEl = null;
  }
  initEl(player) {
    this.el = createElement({
      className: "shk-chapter",
      innerHTML: chapterTemplate
    });
    const attrs = {
      title: "view chapters",
      "aria-label": "view chapters"
    };
    if (!player.seekable) {
      attrs.disabled = "";
    }
    this.chapterBtn = createElement({
      tag: "button",
      className: ["shk-btn", "shk-btn_chapter"],
      attrs,
      innerHTML: `
        <svg aria-hidden="true">
          <use xlink:href="#shk-icon_chapter" />
        </svg>
      `
    });
    player.ui.seekControls.push(this.chapterBtn);
    player.ui.extraControls.append(this.chapterBtn);
    this.closeBtn = this.el.querySelector(".shk-btn_close");
    this.chapterList = this.el.querySelector(".shk-chapter_list");
    this.overflowLayer = this.el.querySelector(".shk-chapter_main");
  }
  initEvents(player) {
    this.chapterBtn.addEventListener("click", () => {
      toggleAttribute(player.el, "data-show-chapter");
    });
    player.ui.hideExtraControl(this.chapterBtn);
    this.closeBtn.addEventListener("click", () => {
      player.el.removeAttribute("data-show-chapter");
    });
    resize = () => {
      if (!this.activeChapterEl)
        return;
      const textWrap = this.activeChapterEl.querySelector(".shk-chapter_title_wrap");
      const text = this.activeChapterEl.querySelector(".shk-chapter_title");
      marquee.call(this, textWrap, text);
    };
    window.addEventListener("resize", resize);
  }
  handleChapterPanel(player, audio) {
    if (audio.chapters.length) {
      player.el.setAttribute("data-has-chapter", "");
    } else {
      player.el.removeAttribute("data-has-chapter");
    }
    if (!audio.chapters.length || !player.seekable) {
      player.el.removeAttribute("data-show-chapter");
    }
  }
  renderChapterList(chapters) {
    if (!chapters.length)
      return;
    chapters.forEach((ch) => {
      const chapterItemEl = this.renderChapterItem(ch);
      this.chapterList.append(chapterItemEl);
    });
  }
  renderChapterItem(chapter2) {
    const startTime = secondToTime(chapter2.startTime);
    const innerHTML = `
      <button class="shk-btn shk-chapter_btn" title="seek chapter: ${chapter2.title}" aria-label="seek chapter: ${chapter2.title}">
        <div class="shk-icon_chapter" aria-hidden="true">
          <span class="shk-icon_playing"></span>
          <span class="shk-icon_triangle">
            <svg>
              <use xlink:href="#shk-icon_triangle" />
            </svg>
          </span>
        </div>
        <div class="shk-chapter_duration">${startTime}</div>
        <div class="shk-chapter_title_wrap">
          <div class="shk-chapter_title_inner" data-chapter="${chapter2.title}">
            <div class="shk-chapter_title">${chapter2.title}</div>
          </div>
        </div>
      </button>
    `;
    return createElement({
      tag: "li",
      className: "shk-chapter_item",
      innerHTML,
      attrs: { "data-id": chapter2.id }
    });
  }
  setChapterActive(id) {
    this.chapterList.querySelectorAll(".shk-chapter_item").forEach((chEl) => {
      if (chEl.getAttribute("data-id") === id) {
        chEl.setAttribute("data-active", "");
        this.scrollIntoView(chEl);
        this.activeChapterEl = chEl;
        const titleEl = chEl.querySelector(".shk-chapter_title");
        const titleWrap = chEl.querySelector(".shk-chapter_title_wrap");
        marquee(titleWrap, titleEl);
      } else {
        chEl.removeAttribute("data-active");
      }
    });
  }
  scrollIntoView(el) {
    if (this.el.style.visibility === "hidden")
      return;
    const layerMargin = window.getComputedStyle(this.overflowLayer).marginTop;
    const listMargin = window.getComputedStyle(this.chapterList).marginTop;
    const offsetTop = parseInt(layerMargin) + parseInt(listMargin);
    const outOfView = this.overflowLayer.scrollTop + offsetTop - el.offsetTop > 0 || el.offsetTop - this.overflowLayer.scrollTop - this.overflowLayer.offsetHeight > 0;
    const startPos = this.overflowLayer.scrollTop;
    const distance = el.offsetTop - startPos - offsetTop;
    const startTime = performance.now();
    const duration = 0.2;
    if (outOfView) {
      animateScroll(
        startTime,
        startTime,
        duration,
        startPos,
        distance,
        this.overflowLayer
      );
    }
  }
  destroy() {
    window.removeEventListener("resize", resize);
  }
}
Chapter._name = "chapter";
console.log(`%c\u{1F34A}%c Shikwasa Podcast Player v2.2.1 %c https://shikwasa.js.org`, "background-color:#00869B40;padding:4px;", "background:#00869B80;color:#fff;padding:4px 0", "padding: 2px 0;");
export { Chapter, Player };
