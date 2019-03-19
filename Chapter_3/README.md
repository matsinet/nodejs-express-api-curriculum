# Let's Create!

Ok, now that we've got both our Express server up and it's connected to MongoDB, it's time to start saving some data! In the rest of the examples used in the remainder of the course we are going to be creating "Posts" as if we were creating this API to run a blog of sorts.

## Setup

To setup for this example, we can build on top of what we did in Chapter 3 with our `connect-mongo.js` boilerplate. The only thing that we need to do in order to save with our current setup is be able to read JSON data from the request body with `req.body`. Luckily, Express comes with a built in body parser that has built in support for JSON, so all we need to do is import `body-parser` with:

```
const bodyParser = require('body-parser')
```

and then initilize it to the Express app using:

```
app.use(bodyParser.json())
```

## Defining a Schema and Model

Before we can save data to the database, we need to tell Mongoose what that data is going to look like. This may seem counterintuitive, since MongoDB is supposed to be "schema-less", but this is a way for Mongoose to map JSON Object to the database to be stored. When we think about what we are going to be saving, we will have a Post that has both a title and a body (both of these will be of the data type `String`).

To create the schema, we will declare it like so:

```
const postSchema = new mongoose.Schema({
  title: String,
  body: String
})
```

After we have declared our schema, we will pass that schema to a Mongoose model with:

```
const Post = mongoose.model('Post', postSchema)
```

We now will have access to `Post` in order to perform the operations we need to create new posts and save them to the database.

## Setting up the Route Handler

The next thing we need to do is set up a new route that we will use to save new posts. We will declare a `POST` route at `/add` and will pass in a callback function that creates a new instance of a `Post` and saves it to the database.

```
app.post('/add', (req, res) => {
  const newPost = new Post(req.body)
  newPost.save((err, post) => { return err ? res.sendStatus(500).json(err) : res.json(post) })
})
```

As you can see, once we save the `newPost` we will just return that data back to the user as a confirmation that the data was properly saved. If you notice, the data we are saving is coming from the `req.body` which is formatted as JSON.

## Testing

In order to test this, we are going to use Postman to save the data. First, startup your server by `cd`ing into the `examples/` directory and running `node create.js` or by doing the same wherever you saved your file. Open up a new tab in Postman and enter `http://localhost:3000/add`. Then, under the `Body` tab, click on `Raw` and then in the dropdown that says `Text`, select `JSON`. In the body of the request, insert the following data:

```
{
	"title": "This is a test title",
	"body": "This is a test body"
}
```

When you click "Send" you should see that same data returned from the server so that you know it was properly saved. In the event that there is an error message, you will receive that instead.