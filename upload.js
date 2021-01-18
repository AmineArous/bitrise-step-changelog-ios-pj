#!/usr/bin/env node
var XMLHttpRequest = require('xhr2');
var base64 = require('base-64');

let commits = process.argv[2]; 

console.log('commits', commits);

console.log("-------lenght")
console.log(commits.lenght)
console.log("-------")

var paramsss = commits.split('\n')

console.log("-------paramsss")
console.log(paramsss.lenght)
console.log("-------")

return "AAA"
let arrayJiras = commits.match(/(#.*) /g);
console.log(
  arrayJiras
);

arrayJiras.forEach(function (item, index) {
  console.log(item, index);
	var s2 = item.substring(1).replace(/ /g,'');
    console.log(s2);
	
	s2 = "MOBIOS-1703"
	/*const request = new XMLHttpRequest();
	
	request.open('GET', 'https://jira.solocal.com/rest/api/2/issue/'+s2+'?fields=status', true)
	request.setRequestHeader("Content-type", "application/json");
	request.setRequestHeader("Authorization", "Basic " + base64.encode("bbm:5Ef-pS7-bPZ-wJ6")); 

	
	request.addEventListener("load", function() {
         console.log('https://jira.solocal.com/rest/api/2/issue/'+s2+'?fields=status');
	   console.log(request.readyState);
	   console.log(request.status);
	   console.log(request.responseText);
    }, false);*/
	
	const request = new XMLHttpRequest();
	
	var params =     {"transition":{"id":71}}
	
	request.open('POST', 'https://jira.solocal.com/rest/api/2/issue/'+s2+'/transitions?expand=transitions.fields', true)
	request.setRequestHeader("Content-type", "application/json");
	request.setRequestHeader("Authorization", "Basic " + base64.encode("bbm:5Ef-pS7-bPZ-wJ6")); 
	
	
	request.addEventListener("load", function() {
        // console.log('https://jira.solocal.com/rest/api/2/issue/'+s2+'?fields=status');
	   console.log(request.readyState);
	   console.log(request.status);
	   console.log(request.responseText);
    }, false);
	
	
	request.send(JSON.stringify(params))
});

