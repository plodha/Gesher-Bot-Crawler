var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://courses.soe.ucsc.edu", function(error, response, body) {
  if(error) console.log("Error: " + error)
  const $ = cheerio.load(body)
  const tags = []
  for (let i = 0; i < 766; i++) tags.push($('li > a').eq(i).html())
  fs.unlinkSync('engineering.txt')
  for (let tag in tags) fs.appendFileSync('engineering.txt', `${tags[tag]}\n`)
  // .map(a => {
  //   return
  // })

  // console.log(classes)
  // .each(listItem => {
  //   console.log(listItem)
  // })
  // $(this).each((listItem) => {
  //   console.log('list-item', $(this))
  // })
  // .each(i => {
  //   console.log(i)
  // })
});
