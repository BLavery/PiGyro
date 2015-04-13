// Acknowledgement   https://github.com/shaunuk/picar


//declare required modules
var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , static = require('node-static')
  , ip = require('ip');

app.listen(8080);

var file = new(static.Server)();
function handler(request, response)
{
  console.log("\033[4;0H");  // cursor position
  console.log('serving file',request.url);
  file.serve(request, response);
};

console.log('\033[2J\033[;HServer listening\nVisit http://'+ip.address()+':8080');

io.sockets.on('connection', function (socket)
{
    //got phone msg
    socket.on('fromclient', function (data)
    {
        do_something(data);
        console.log("\033[11;0H             ");  // erase any stop message
        clearInterval(lastAction); //stop emergency stop timer
        lastAction = setInterval(emergencyStop,1000); //set emergency stop timer

    });
});


//user hits ctrl+c
//
process.on('SIGINT', function()
{
  console.log("\nShutting down from SIGINT (Ctrl-C)");

  return process.exit();
});

//
function emergencyStop()
{
    console.log("\033[11;0Hsignal lost");
};

lastAction = "";

function do_something(data)
{
    // rpi servo control?
    // gpio i/o?
    // here we just print to screen
    console.log("\033[6;0H");  // cursor position
    console.log("Compass: " + Math.round(data.alpha*100)/100 + "  ");   // compass
    console.log("Pitch:   " + Math.round(data.beta*100)/100 + "  ");    // front up
    console.log("Roll:    " + Math.round(data.gamma*100)/100 + "  ");   // left up

}
