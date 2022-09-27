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

![Main_Page_Travel_Tracker]()

A user can also select a choice using a drop down to post new activity, hydration, and sleep data using input fields and a calendar date picker. The dashboard will show a zero value for any days with missing data. The user is given information about what types of inputs are expected in each field using placeholder text. Posted data will then display on the dashboard without page refresh. The gif below is showing an example of posting new activity information for a given day.

![Activity_Post]()

## Setup
1. Fork this repo - on the top right corner of this page, click the **Fork** button. 
2. Clone down the forked repo. To rename your project you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
4. Run `npm start` in the terminal to see the HTML page running in your browser on `http://localhost:8080/`. `Control + C` is the command to stop running the local server.  Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use. 
5. Clone the [Travel tracker](https://github.com/turingschool-examples/travel-tracker-api) to a separate folder, CD into it and run `npm install`. 
6. The local server is now running on `https://localhost:3001/api/v1/activity` for example. Make sure to use `Control + C` to close the local server before closing the terminal when finished.
7. Enjoy! 

## Technologies
This project used JavaScript, HTML, and CSS primarily. Test driven development using Mocha and Chai was also used. Additional technologies learned specifically for this project included Webpack, Chart.js, testing accessibility using LightHouse, and making network requests to fetch information from an API. 

## Contributors
This project was built Front End Engineering student at Turing School of Software and Design: 
- [Jedeo Manirikumwenatwe](https://github.com/Jedeo)

