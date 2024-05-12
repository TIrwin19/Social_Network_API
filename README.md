# Social Network API

![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Description
This app utilizes Mongoose and Express to create an api database. It consists of user and thought collections with routes for each that creates interaction like adding a friend and reactiong to other user's thoughts. Node.js is required to run this app along with MongoDB with Compass and a route viewer like Insomnia.

## Table of Contents
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Visuals
<img src="./public/images/Screenshot 2024-05-12 192138.png">
<img src="./public/images/Screenshot 2024-05-12 192149.png">

## Usage 
First you must clone the repo then, assuming you have node.js, install the npm packages using "npm i" in the terminal. Once that is done you can start the server bu entering "npm run dev" in the terminal. No need to restart the server each time you make a request, it is runing with nodemon. Next, you will need to install [Insomnia](https://insomnia.rest/download) and [MongoDB Compass](https://www.mongodb.com/products/tools/compass). Once those are installed you can connect Compass and view the social_media_db database and its user and thought collections. The colllections will be empty until you add users and thoughts using Insomnia. You can open Insomnia and create a few GET, POST, PUT, and DELETE routes which you can refrence in the images above. Note this is ran locally on your machine with every route prefaced with "localhost:3000/api".

## Credits
JD Tadlock: For all the instruction in the Rutgers Coding Bootcamp

## License
#### MIT
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
[Link to License](https://opensource.org/license/MIT)
You can also check out the LICENSE in the repo.

## How to Contribute
Check out the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

## Tests
N/A

## Questions
If you have any questions check out my [Github](https://github.com/TIrwin19)
