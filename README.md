
## Sends sensor data from arduino to gsheets
Uses a script for gsheets to handle a post msg that is send inside the arduino and then inserts de data into a google sheet.

## Partlist

 - ESP8266 (wemos_d1) *// controller*
 - DHT22 *// temp and humidity*
 - MQ135 *// gas analyser*

## Steps
1. setup a new google sheet.
2. add script to sheet
3. publish to web
4. used link in arduino code

![enter image description here](https://github.com/dionysos1/sensor_to_gsheet/blob/main/preview.png)
