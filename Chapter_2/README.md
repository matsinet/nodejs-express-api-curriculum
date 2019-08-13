# Setting Up Mongoose & Connecting to MongoDB

Now that we have a basic server setup, we now need to connect it to our database so that we can start running some CRUD operations on it. To do this, we are going to create another server in almost the same way as we did in Chapter 1, but with a couple of differences.

## Setting Up MongoDB

### Mac OS/Linux

To set up MongoDB on Mac OS or Linux, we are going to be using a package called `mongodb-runner`. This will make spinning up and configuring the MongoDB server super simple. If you are doing your work within this curriculum directory, you can use `mongodb-runner` by running `npx mongodb-runner start` which will start the MongoDB server. If you are running your files elsewhere, it may be a good idea to install the package globally by running `npm install -g mongodb-runner`. You can leave the MongoDB server running for as long as you need, but you can always run `npx mongodb-runner stop` if you are done.

> NOTE: If you installed `mongodb-runner` globally, you can use the commands without running it through `npx`, so simply doing `mongodb-runner start|stop` will suffice.

### Windows

To set up MongoDB on Windows, we need to follow the installation instructions here: [Windows Walk Through](./WINDOWS-WALKTHRU.md)

## Connecting MongoDB to Express

For this course, we will be using a library called "Mongoose" to handle all of our connections to MongoDB. Mongoose is a library that handles connections and data mapping with MongoDB. To install it, you can run `npm install mongoose`, but if you are running your files within this project directory, we installed it for you already. To include Mongoose in your project, add the line:

```
const mongoose = require('mongoose')
```

Once you've required Mongoose, it's time to hook it up to MongoDB. You can do this by initializing the connection string using:

```
mongoose.connect('mongodb://localhost/test')
```

In this example, we are simply going to call our database `test`, but note that you can call this whatever you want.

The next thing we are going to do is map the constant `db` to `mongoose.connection` so that we can refer to it later on in our code without having to type it all out again. You can do this by using:

```
const db = mongoose.connection
```

We then are going to assign a variable called `db_status` equal to the string "MongoDB connection not successful." This will come in handy later because we will want to use this string to notify the user if the connection to the database was not successful.

```
let db_status = 'MongoDB connection not successful.'
```

The next two lines are going to be what handles events that Mongoose sends back to indicate the status of our connection to the database. The first line is listening for "error" events which will tell us if there were any connection issues. The next line is going to tell us that the connection to the database was successful, and if that is the case, we are going to change the `db_status` string to equal "Successfully opened connection to Mongo!"

```
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => db_status = 'Successfully opened connection to Mongo!')
```

Once we've done that, we simply need to send the user the status of the database using:

```
res.send(db_status)
```

## Running Our Example

In order to run this example, you will need to start `mongodb-runner` *first* in order for our Express server to make a successful connection to it. If you want to use our pre-built example, `cd` into the `examples/` directory and first run `mongodb-runner start` and then run `node connect-mongo.js`. If the connection was sucessful, you should be able to navigate to [http://localhost:3000/](htto://localhost:3000) and see the words "Successfully opened connection to Mongo!".

<< [Chapter 1: Hello world!](../Chapter_1/README.md) || [Home](../README.md) || [Chapter 3: Let's Create!](../Chapter_3/README.md) >>
