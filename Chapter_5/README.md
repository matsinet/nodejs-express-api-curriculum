# Updating a Record

Now that we can successfully create and read posts in our database, we want to be able to edit them or "update". To do this, we are simply going to add on to our previous work.

## Setting up Update

To set up an update operation, we are going to create a new `PATCH` route that finds the record in the database and updates the specified fields. We can achieve this by doing:

```
app.patch('/update', (req, res) => {
  Post.findByIdAndUpdate(req.body.id, { $set: { title: req.body.title, body: req.body.body } }, (error, data) => {
      if (error) return res.sendStatus(500).json(error)
      return res.json(req.body)
  })
})
```

Here, we are using the `Post` constant that we created to query the database and find it by the `id` (which we are passing into the `req.body`), and then once we find that record, we are setting the `title` equal to `req.body.title` and setting the `body` equal to `req.body.body`. Once the update operation is done, we are going to simply send back whatever was updated to the user. You may notice that instead of sending back `data`, we are simply sending back `req.body`. Mongoose doesn't send back the updated data, it sends back what was previously inside the record.

## Testing

In order to test this, we are going to use Postman to update the data. First, startup your server by `cd`ing into the `examples/` directory and running `node update.js` or by doing the same wherever you saved your file. Open up a new tab in Postman and enter `http://localhost:3000/update`. In the dropdown next to the URL, select the dropdown and click on "PATCH". Then, under the `Body` tab, click on `Raw` and then in the dropdown that says `Text`, select `JSON`. In the body of the request, insert the following data:

```
{
  "id": "<POST_ID>",
	"title": "This is a new test title",
	"body": "This is a new test body"
}
```

When you click "Send" you should see that same data returned from the server so that you know it was properly updated. In the event that there is an error message, you will receive that instead.

