#!/usr/bin/env node

let commits = process.argv[2]; 

console.log('commits', commits);

let arrayJiras = commits.match(/(#.*)/g)

console.log('arrayJiras', arrayJiras);