const connectToRabbitMQ = require("../config/rabbitmqConfig");

async function publishEvent(eventName, eventData) {
  const channel = await connectToRabbitMQ();
  channel.assertQueue(eventName, { durable: false });
  channel.sendToQueue(eventName, Buffer.from(JSON.stringify(eventData)));
}

async function subscribeToEvents(eventName, callback) {
  const channel = await connectToRabbitMQ();
  channel.assertQueue(eventName, { durable: false });
  channel.consume(
    eventName,
    (msg) => {
      const eventData = JSON.parse(msg.content.toString());
      callback(eventData);
    },
    { noAck: true }
  );
}

module.exports = { publishEvent, subscribeToEvents };
