const EventListener = require('events');

class Emitter extends EventListener{}
emitter = new Emitter();

emitter.on('knock', () => console.log("Come in, it's open"));
emitter.on('knock', () => console.log("Go away, I'm busy"));

emitter.removeAllListeners();
emitter.emit('knock');