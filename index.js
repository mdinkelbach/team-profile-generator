const inquirer = require("inquirer");
const Manager = require("./lib/manager").Manager;
const Employee = require("./lib/employee").Employee;
const fs = require('fs');

let htmlPh = '';
let cssPh = '';


function begin() {
    fs.writeFile('./dist/test.html', top(), (err) =>
    err ? console.error(err) : htmlPh = ''
    );
    fs.writeFile('./dist/style.css', css(), (err) =>
    err ? console.error(err) : cssPh = ''
    );
    console.log(`Enter Manager's Name`)
    const manager = new Manager()
    manager.getName();
}

const top = () =>
`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="./style.css" />
  <title>Team</title>
</head>

<body>
  
  <h1>My Team</h1>
<section class="card-holderer">
<section class="card-holder">`;


const css = () =>
`body {
    display: flex;
    height: 100vh;
    flex-direction: column;
}

h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    color: white;
    height: 20vh;
}

.card-holderer {
    display: flex;
    justify-content: center;
}

.card-holder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
}

.card {
    display: flex;
    flex-direction: column;
    width: 15vh;
    border: solid 1px black;
}

.text {
    padding: 5px;
    margin: 10px 0 10px 0;
}`
begin();