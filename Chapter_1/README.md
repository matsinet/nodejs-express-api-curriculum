# Hello World!

The most tried and true way to first learn something in programming is to run the infamous "Hello World!" example, no? In this chapter we will be building a very simple web server that can be navigated to in the browser and will display the words, "Hello World!".

## Setup

To get started creating our simple web server example, create a new directory and a file in it named `hello-world.js` and open it up. In this course, we are using a web framework called "Express" that will help by simplifying a lot of boilerplate needed for making HTTP requests and by giving us convenience methods for setting up appropriate routes and utilizing HTTP verbs like `GET` and `POST`. The first thing we need to do to utilize this framwork is import it which we can do at the top of our `hello-world.js` file:

```
const express = require('express')
```

If you are creating your `hello-world.js` file within this directory, there is nothing more that needs to be done to include the Express framework, however, if you are doing this in a separate directory, you'll have to use NPM to install it by running `npm install express`. (NPM is included with Node.js by default and is simply a package manager that allows people to share source code across projects).

After we have included Express in our file, we need to initilize it. Here we are also going to assign a constant called `port` equal to `3000`. This simply signifies the port that our server will listen on.

```
const app = express()
const port = 3000
```

By creating a new instance of `express()` and assigning it to `app`, we can now use `app` to set up all of our different routes and listeners. The first thing we need to do in order to be able to navigate in our app is set up a route. Here we are going to declare a route at `/` which means that will be the first thing the user sees whenever they navigate to this server (which will be accessible at `localhost:3000` in this example).

```
app.get('/', (req, res) => res.send('Hello World!'))
```

This route is using the `GET` verb and we are passing in a function that includes the request (`req`) and response (`res`) objects. These are convenience features that are setup by Express to include things like HTTP headers and data payloads. In this example, we are simply taking the request and sending back a string of "Hello World!". Express automatically handles setting the content type and other headers that the browser needs to digest what type of data it is receiving.

Once we have our server initilized and ready to send back requests, we simply need to give it a port to listen on which we already declared in our `port` constant. Now, we just pass that in like so:

```
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

Congratulations! You just built your first web server. You can start this up by running `node hello-world.js` either from the `examples/` directory included in this chapter or by running it wherever you put your `hello-world.js` file! To see the results, just open your browser and to go [http://localhost:3000/](htto://localhost:3000) and you should see the words "Hello World!"

<< [Home](../README.md) || [Chapter 2: Setting Up Mongoose & Connecting to MongoDB](../Chapter_2/README.md) >>