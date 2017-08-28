const fs = require('fs');
const path = require("path");

var filesToWrite = process.argv[2] || 0;

// formulate html
var htmlHead = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>Veris Challenge</title></head>';
var htmlTableBeg = `<body><table style="text-align: center; width: 75%;"><tr><th>Victim ID</th><th>Victim Country</th><th>Actor Country</th><th>Actor Variety</th><th>Actor Motive</th></tr>`;
var htmlTableMid;
var htmlTableEnd = '</table></body>';
var incidents;
var html;

// reads latest-incidents.json and writes to index.html
function readJsonAndWriteToHtmlFile () {
  fs.readFile('latest-incidents.json', 'utf8', function (err, data) {
    if(err) {
      console.error(err)
    } else {
      incidents = JSON.parse(data);
      var victimId = incidents.victim.victim_id;
      var victimCountry = incidents.victim.country[0];
      var actorCountry = incidents.actor.external.country[0];
      var actorVariety = incidents.actor.external.variety[0];
      var actorMotive = incidents.actor.external.motive[0];
      htmlTableMid = '<tr><td>' + victimId + '</td><td>' + victimCountry + '</td><td>' + actorCountry + '</td><td>' + actorVariety + '</td><td>' + actorMotive + '</td></tr>';
      html = htmlHead + htmlTableBeg + htmlTableMid + htmlTableEnd
      fs.writeFile("index.html", html, function(err) {
        if(err) {
          return console.log(err);
        } else {
          console.log("The file was saved!");
        }
      });
    }
  });
}
readJsonAndWriteToHtmlFile();

// connect to GitHubs API

// var GitHub = require('github-api');
// var noAuth = new GitHub();

// MongoDB Query

// db.rokaInterview.find({"action.hacking": {"$exists": true}, "actor.external": {"$exists": true}}, {"victim": true, "actor": true, "timeline.incident": true}).sort({"plus.created": -1}).limit(10)
