//req.ip
//'x-forwarded-for'
//'user-agent'
//'accept-language'
//req.headers['user-agent']
//{"ipaddress":"73.182.8.105","language":"en-US","software":"Macintosh; Intel Mac OS X 10_12_6"}

var who = function (data) {
  getOS(data.headers['user-agent']);
  return { "ipaddress": data.ip, "language": getLang(data.headers['accept-language']) };
}

function getLang(lanHdr) {
  var split = lanHdr.indexOf(',');
  return lanHdr.substring(0, split);
}

function getOS(agent) {
  var split 
}



module.exports = who;