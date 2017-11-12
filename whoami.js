//req.ip
//'x-forwarded-for'
//'user-agent'
//'accept-language'
//req.headers['user-agent']

var who = function (data) {
  console.log(typeof(data.headers['user-agent']));
  return data.ip;
}




module.exports = who;