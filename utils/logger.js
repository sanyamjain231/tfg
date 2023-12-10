// This file contains a simple logging utility

function logEvent(event) {
  console.log(`Event: ${JSON.stringify(event)}`);
}

module.exports = { logEvent };
