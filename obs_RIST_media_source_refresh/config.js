var config = {
   //if you put the html solution on the same host use this loopback address, otherwise use the ip of the host that is running OBS
  "host": "127.0.0.1",
  // this is the default OBS websocket port, if you changed it in your OBS, then you need to change it here too
  "port": "4455",
  // this is the Item Name of your media source that is running the RIST stream, it is case sensitive! please change the placeholder
  "mediaSourceName": "[CHANGE_ME_MEDIA_SOURCE_NAME]",
  // if the refresh cooldown is too low OBS might refresh, this default should be fine, which is the frequence it is checking for any changes
  "refreshCooldownMs": 3000,
  // please replace the placeholders. only put in the ip and the port without any protocols so for example 192.168.1.22:8683 if you use the websocket html please use the port for the websocket stats (default: 8683) if you use the normal html please use the http stats port (default: 8681)
  "statsUrl": "[CHANGE_ME_RIST-STATS-URL]:[CHANGE_ME_RIST-STATS-PORT]",
  // if you have your own bitrate overlay solution set it to false
  "enableStatsOverlay": true
};