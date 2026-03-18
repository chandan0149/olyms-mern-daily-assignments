const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register event listeners
emitter.on("userLoggedIn", (name) => {
    console.log(`User ${name} logged in.`);
});

emitter.on("userLoggedOut", (name) => {
    console.log(`User ${name} logged out.`);
});

emitter.on("sessionExpired", (name) => {
    console.log(`Session expired for ${name}.`);
});

// Emit events
emitter.emit("userLoggedIn", "John");
emitter.emit("userLoggedOut", "John");

// Bonus: Emit after 5 seconds
setTimeout(() => {
    emitter.emit("sessionExpired", "John");
}, 5000);