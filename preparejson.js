'use strict';

const fs = require('fs');
const path = require('path');

let filesToRead = [];
let targets = [];

let files = fs.readdirSync(__dirname);
for(let file of files){
    let temp = file.split('.');
    let extension = temp[temp.length -1];
    if(extension === 'json') filesToRead.push(file);
}

filesToRead.forEach( file => {
    let obj = fs.readFile(path.join(__dirname, file), 'utf8', (err, data)=> {
        let calls = JSON.parse(data);
        let number;
        let incomming = [];
        let outgoing = [];
        for(let call of calls){          
            if((call["Incomming"] == null || call["Incomming"] == "") && (call["SideB"] != null && call["SideB"] != "" && call["SideB"] != "0")){
                number = call["SideB"];
            } else if (call["Incomming"] == "ENTRANTE"){
                incomming.push(call);
            } else if (call["Incomming"] == "SALIENTE"){
                outgoing.push(call);
            }
        }
        let target = {
            number, 
            incomming, 
            outgoing
        };
        targets.push(target);
    });
});

