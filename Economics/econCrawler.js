var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://economics.ucsc.edu/academics/courses/course-catalog.php", function(error, response, body) {
  if(error) console.log("Error: " + error)
  const $ = cheerio.load(body)
  const tags = []
  const course = []
  // var title = $(this).find('div.courseNbr > a').eq().html()
  // console.log(title);
  for (let i = 0; i < 142; i++){
    tags.push($('div.courseNbr').eq(i).html())
    course.push($('div.courseTitle').eq(i).html())
  }
  fs.unlinkSync('economics.txt')
  for (let tag in tags) {
    fs.appendFileSync('economics.txt', `${tags[tag]}\n`)
    fs.appendFileSync('economics.txt', `${course[tags]}\n`)
    console.log(tags[tag]+':'+ course[tags])
  }
});
