#!/usr/bin/env node

let commits = process.argv[2]; 

console.log('commits', commits);


let arrayJiras = commits.match(/(#.*) /g);
console.log(
  arrayJiras
);

for (var i = 0; i < arrayJiras.length; i++) {
    var s2 = arrayJiras[i].substring(1).replace(/ /g,'');
    console.log(s2);

}