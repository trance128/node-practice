const Job = require('./job');
var job = new Job();

job.on('done', function(details) {
    console.log('Weekly email was completed at', details.completedOn);
});

job.emit('start');