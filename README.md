# Travel Tracker

## Table of Contents
- [Introduction](#introduction)
- [Links](#links)
- [Learning Goals](#learning-goals)
- [Features](#features)
- [Setup](#setup)
- [Future Additions](#future-additions)
- [Technologies](#Technologies)
- [Contributors](#contributors)

## Introduction
Travel Tracker is an interactive website that tracks a travelers destination. Goal for this application is to create a dashboard that is easy to navigate and where users are able to book there next destination at ease. 

## Links
- [Project spec](https://frontend.turing.edu/projects/travel-tracker.html)

## Learning Goals 
- Implement ES6 classes that communicate to each other as needed
- Write modular, reusable code that follows SRP (single responsibility principle).
- Use object and array prototype methods to perform data manipulation. 
- Implement a robust testing suite using TDD (test driven development).
- Work with local server and make network requests to API endpoints to retrieve and manipulate data. 
- Use Webpack to bundle our files.
- Ensure our app follows best practices for accessibility.
- Utilize proper error handling for our users to ensure they get data and submit POST requests. 

[![Travel Tracker](https://user-images.githubusercontent.com/16736352/192635904-525f18de-adb9-4f7e-8070-bfdff6a7e028.mov)](https://user-images.githubusercontent.com/16736352/192640942-9e5047d7-ce3b-48ae-8ed3-bac01e37bb9b.mov)

Clicking a destination on the dashboard will allow the user to request a new trip by filling out a pop up form. Depending on the dates they plan to trip a travel agent will review lodging and flights availabilities.  

## Setup
1. Fork this repo - on the top right corner of this page, click the **Fork** button. 
2. Clone down the forked repo. To rename your project you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
4. Run `npm start` in the terminal to see the HTML page running in your browser on `http://localhost:8080/`. `Control + C` is the command to stop running the local server.  Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use. 
5. Clone the [Travel tracker](https://github.com/turingschool-examples/travel-tracker-api) to a separate folder, CD into it and run `npm install`. 
6. The local server is now running on `https://localhost:3001/api/v1/activity` for example. Make sure to use `Control + C` to close the local server before closing the terminal when finished.
7. Enjoy! 

##Future Additions
- The next step may be to add a search bar that allows users to browse all available destinations and search for a specific destination.
- Travel agents can review pending trips with a secondary login. 
- The ability to add new destinations as an agent.
- Implementing audit suggestions from web accessibility evaluation tools to make the web application more accessible than it already is.




## Technologies
This project used JavaScript, HTML, and CSS primarily. Test driven development using Mocha and Chai was also used. Additional technologies learned specifically for this project included Webpack, testing accessibility using LightHouse, and making network requests to fetch information from an API. 

## Contributors
This project was built Front End Engineering student at Turing School of Software and Design: 
- [Jedeo Manirikumwenatwe](https://github.com/Jedeo)

