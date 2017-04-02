let cheerio = require('cheerio');
let http = require('https');
var fs = require('fs');

var file = fs.createWriteStream("insta.html");
module.exports = {
getInstaPPLink : function(name,callback){
http.get("https://www.instagram.com/"+name+"/", function(res) {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', 
  (chunk) => {
  rawData += chunk;
  });
  res.on('end', () => {
    let $ = cheerio.load(rawData);
	$('meta').each(function(i, element){
	var link = ($(this).attr('content')===undefined)?"":$(this).attr('content');
	if(link.indexOf('.jpg') > 0){
	callback(link);
	}
	});
  });
})
}
}
