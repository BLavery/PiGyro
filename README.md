# PI Gyro
V0.5
## May 2018 - This is no longer being maintained by the original author.
## Please feel free to fork, copy, adapt if you find it useable
Using a mobile phone as a Compass / Pitch / Roll sensor to your Raspberry Pi.

Communication: Phone: Home wifi network,   Pi: Home network,    Internet accessability: yes

Modern javascript (running in a browser on the phone) is entitled to ask the
phone for its orientation readings. Not the raw sensor readings, but a higher-level
set of yaw (compass heading), pitch (front up/down) and roll (side up/down) figures.

Using an easy "node.js" implementation of a 1-page webserver on the Raspberry Pi,
javascript at the Pi can make a socket link with the javascript on the phone,
and the Pi can very easily accept a stream of orientation data from the phone.
Thus the phone becomes a hand movement controller, like a modern game controller.
Use the orientation data at the Pi as input for whatever you need.
This demo simply prints the three figures to Pi terminal screen.

Requirements:
 -  Smartphone. Android was tested. iPhone expected to be similar. The phone just runs a browser.
 -  Wifi home network with internet. (Internet just to download jquery.)
 -  Two files for the Raspberry Pi:   server.js (the webserver), index.htm (will be fetched by the phone).
 -  "node.js" aka node - installed on the Pi.
 -  Three modules downloaded for node:  socket.io  and  node-static  and  ip

SETUP:

1. Make yourself a working directory and make your project in there.  Eg /home/pi/gyro/
It will probably only get the 2 files.

2. NODE.JS:  If you install from the Raspbian repository, you get an old version of node.js. Instead get it from
       http://node-arm.herokuapp.com/
This installed node 0.12.1 for me.

3. MODULES:  Use Node Package Manager (which installed as part of node). It doesn't seem to matter whether you load the modules locally or global.
 -       npm install socket.io ip node-static

4. THE TWO FILES:  Get them from github.
        https://github.com/BLavery/PiGyro
The zip file lower right is easiest. unzip into your folder.

5. START WEBSERVER:  On the Pi, start webserver. Run in a terminal:
 -       node server.js

6. PHONE: Start browser. Set address to the Raspberry Pi address on your network, at "port 8080". Eg:
       http://192.168.1.14:8080
Press OK to start.
That's it!
Move the phone. Changing sensor figures should print on the Pi.



Concept credit:
        https://github.com/shaunuk/picar

Other ref:
        http://www.w3.org/TR/orientation-event/
