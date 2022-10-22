var event =require('events');
var eventEmiter=new event.EventEmitter();

var myEventHandler=function() {
    console.log('event call');
}

eventEmiter.on('scream',myEventHandler);

eventEmiter.emit('scream');