var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://eps.ucsc.edu/academics/courses/course-catalog.php", function(error, response, body) {
  if(error) console.log("Error: " + error)
  const $ = cheerio.load(body)
  const tags = []
  const course = []
  // var title = $(this).find('div.courseNbr > a').eq().html()
  // console.log(title);
  for (let i = 0; i < 117; i++){
    tags.push($('div.courseNbr').eq(i).html())
    course.push($('div.courseTitle').eq(i).html())
  }
  fs.unlinkSync('EPS.txt')
  for (let tag in tags) {
    fs.appendFileSync('EPS.txt', `${tags[tag]}\n`)
    fs.appendFileSync('EPS.txt', `${course[tag]}\n`)
    console.log(tags[tag]+':'+ course[tag])
  }
});
