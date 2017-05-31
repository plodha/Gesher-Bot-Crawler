var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://www.math.ucsc.edu/courses/course-catalog.php", function(error, response, body) {
  if(error) console.log("Error: " + error)
  const $ = cheerio.load(body)
  const tags = []
  const course = []
  for (let i = 0; i < 119; i++){
    tags.push($('div.courseNbr').eq(i).html())
    course.push($('div.courseTitle').eq(i).html())
  }
  fs.unlinkSync('math.txt')
  for (let tag in tags) {
    fs.appendFileSync('math.txt', `${tags[tag]}\n`)
    fs.appendFileSync('math.txt', `${course[tag]}\n`)
    console.log(tags[tag]+':'+ course[tag])
  }
});
