# Reading from the Database

Now that we have successfully saved some data to the database, we want to be able to read it back and list out our `Blog` posts. This chapter will build on the materials that we built in Chapter 3.

## Setting up Read

To set up a read operation, all we are going to do is set up a new `GET` route that queries the database for all records and then displays it back to the user. We can do that with:

```
app.get('/list', (req, res) => {
  Post.find({}, (error, data) => {
    if (error) return res.sendStatus(500).json(error)
    return res.json(data)
  })
})
```

In the above code, we are using the `Post` constant that we created to query with the pattern `{}` which here just means all posts, with no constraints. If Mongoose is successful in finding some posts, it will send them all back to the user as an array of objects. If we want to return just a single post, we can instead do the following:

```
Post.findById(req.body.id, (error, data) => {
  if (error) return res.sendStatus(500).json(error)
  return res.json(data)
})
```

Where we pass the `id` of the post into the request body.

## Testing

In order to test this, we are going to use Postman to retrieve the data. First, startup your server by `cd`ing into the `examples/` directory and running `node read.js` or by doing the same wherever you saved your file. Open up a new tab in Postman and enter `http://localhost:3000/list`.

When you click "Send" you should see a list of all the different posts that you have saved in your database.

<< [Chapter 3: Let's Create!](../Chapter_3/README.md) || [Home](../README.md) || [Chapter 5: Updating a Record](../Chapter_5/README.md) >>