# CAST Frontend Technical Challenge

## Goal

You have to develop a web application where the users are able to manage their portfolio of applications with the next use cases.

* User should be able to see the list of applications
* User should be able to see how many application it has in one glance
* User should be able to filter the applications by name
* User should be able to know how many versions has each application
* User should be able to create a new application
* User should be able to delete an existing application
* User should be able to navigate to the details view of each application
* In the details view, user should be able to see the list of versions
    + current version should be remarked
    + version date is render is this format: `YYYY-MM-DD` (e.g 2019-06-22)
* In the details view, user should be able to create a new version
* In the details view, user should be able to delete an existing version

## Implementation 

* You don't need to implement any user authentication, don't need to persist the data in a remote server, however you have to iterate with the
data as it were having an async behaviour, you can use the file [data.json](./src/data.json) as starting data
* You may use any other library as you see fit
* You should implement some unit tests, just for a tiny part of the application. We only want to see how do you approach the unit tests
* For the styles you should use Sass, if you don't know Sass, you're free to use plain CSS

## Delivering

Please set up the project to have a git repo make sure the .git folder is included in the delivery, 
we are much more interested in how you approach the project rather than in the end result. 

We will look at your code style, how well you follow React best practices, how you use the libraries
you chose as well as how the UX of the app feels. To a lesser degree, we will take the graphic
design and layout into account.

# Set up

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
