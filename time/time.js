
exports.action = function(data, Callback, config){

  // CONFIG
var config = config.modules.time;

  if (!config.IP_Imperihome){
    console.log("Missing Imperihome config");
    return;
  };
  
  var date = new Date();
  var ip_imp = config.IP_Imperihome;
  var text = 'il est ' + date.getHours() + ' heure ';
  if (date.getMinutes() > 0){ 
    text += date.getMinutes();
  }
  //text += ' [name]';

  // Callback with TTS
  Callback({'tts': text});
  
  // Callback with Imperihome
  var url = 'http://'+ip_imp+':8080/api/rest/speech/tts?text='+text
  var request = require('request');
  console.log(url)
  request({ 'uri' : url })
}