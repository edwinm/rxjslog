import {tap} from 'rxjs/operators';

let config = {
  next: {
    icon: "🔵",
    color: "blue",
  },
  error: {
    icon: "❌",
    color: "blue",
  },
  complete: {
    icon: "✅",
    color: "blue",
  },
};

const ansiColors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m"
};

const isNode = detectNode();

export function log(message) {
  return tap(
    (data) => consoleLog("next", message, data),
    (data) => consoleLog("error", message, data),
    () => consoleLog("complete", message),
  )
}

export function logConfig(newConfig) {
  config = Object.assign(config, newConfig);
}

function consoleLog(type, message, data) {
  let args;

  if (isNode) {
    const color = ansiColors[config[type].color] || "";
    args = [`${config[type].icon} ${color}${message}`];
  } else {
    args = [`${config[type].icon} %c${message}`, `color: ${config[type].color}`]
  }

  if (type != "complete") {
    args.push(data);
  }

  console.log(...args);
}

function detectNode() {
  return typeof self == "undefined";
}
