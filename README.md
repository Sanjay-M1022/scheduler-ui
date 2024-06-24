# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing dependencies

opne a terminal and go to the project folder install required packages using `npm i` command.

## Setting environmental varibles

create `.env` in the root folder of the project and the following content in it

```
# url of the scheduler api server, It should be same as what is used in scheduler backend application
REACT_APP_JOBS_API_URL=http://127.0.0.1:8000
# url of the scheduler websocket server
REACT_APP_LIVE_UPDATE_URL=ws://localhost:8080
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
