#!/usr/bin/env node
var XMLHttpRequest = require('xhr2');
let commits = process.argv[2]; 

console.log('commits', commits);


let arrayJiras = commits.match(/(#.*) /g);
console.log(
  arrayJiras
);

for (var i = 0; i < arrayJiras.length; i++) {
    var s2 = arrayJiras[i].substring(1).replace(/ /g,'');
    console.log(s2);
	
	
	const request = new XMLHttpRequest();
	request.open('POST', 'https://jira.solocal.com/rest/api/2/issue/'+s2+'?fields=status', true, 'bbm','5Ef-pS7-bPZ-wJ6')
	request.setRequestHeader("Content-type", "application/json");
	request.onreadystatechange = function() {
	        // D some business logics here if you receive return
	   if(request.readyState === 4 && request.status === 200) {
	       //console.log(request.responseText);
	   }
	   console.log('https://jira.solocal.com/rest/api/2/issue/'+s2+'?fields=status');
	   console.log(request.readyState);
	   console.log(request.status);
	   console.log(request.responseText);
	}
	request.send()
}
