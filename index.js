import {tap} from 'rxjs/operators';

const config = {
  next: {
    icon: "➡️",
    color: "purple",
  },
  error: {
    icon: "❌",
    color: "purple",
  },
  complete: {
    icon: "✅",
    color: "purple",
  },
};

const isNode = detectNode();

export function log(message) {
  return tap(
    (data) => consoleLog("next", message, data),
    (data) => consoleLog("error", message, data),
    () => consoleLog("complete", message),
  )
}

function consoleLog(type, message, data) {
  if (isNode) {
    if (type != "complete") {
      console.log(`${config[type].icon}️  ${message}`, data);
    } else {
      console.log(`${config[type].icon}️  ${message}`);
    }
  } else {
    if (type != "complete") {
      console.log(`${config[type].icon}️ %c${message}`, `color: ${config[type].color}`, data);
    } else {
      console.log(`${config[type].icon}️ %c${message}`, `color: ${config[type].color}`);
    }
  }
}

function detectNode() {
  return typeof self == "undefined";
}
