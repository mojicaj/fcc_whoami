//req.ip
//'x-forwarded-for'
//'user-agent'
//'accept-language'
var who = function (data) {
  console.log(data);
  return data.ip;
}




module.exports = who;