var who = function (data) {
  return { "ipaddress": data.ip, "language": getLang(data.headers['accept-language']), "software": getOS(data.headers['user-agent']) };
}

function getLang(lanHdr) {
  var split = lanHdr.indexOf(',');
  return lanHdr.substring(0, split) || lanHdr;
}

function getOS(agent) {
  var strt = agent.indexOf('(')+1;
  var end = agent.indexOf(')');
  return agent.substring(strt, end);
}



module.exports = who;