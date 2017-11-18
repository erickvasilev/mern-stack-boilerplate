# MERN Stack v1.0

This is a starter-kit boilerplate that capable to...

* Setup a React / Node application in same machine
* Create, Read, Update and Delete data from MongoDB with the Mongo API

## Get Started

1. Clone this repository

```bash
git clone https://github.com/erickvasilev/mern-stack-boilerplate.git
```

2. Change into the directory that was cloned and run `npm install`

```bash
cd mern-stack-boilerplate && npm install
```

3. Configure the MongoDB Server Setting

Change  `address` and `dbName` to match your MongoDB environment in: server/env.js.


## Running The App

In development, the app runs via two separate processes...

### Start the Express Server

```bash
node server/server.js
```

### Start Create React App

In a different terminal tab...

```bash
npm start
```

## Building For Production

In production, you want Express to serve up your app.

### Build React App

```bash
npm build
```

Now start the Express server from the server folder

```bash
cd server
npm start
```

Your entire application is now running on port 3001.

### BIG Thanks

Learn from here: https://docs.microsoft.com/en-us/azure/cosmos-db/tutorial-develop-mongodb-react
