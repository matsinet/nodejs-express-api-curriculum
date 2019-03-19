# Final Step: Delete

So far, we've done Create, Read, and Update. The final step in the process is the ability to Delete a record.

## Setting up Delete

To set up a delete operation, we are going to create a new `DELETE` route that finds the record in the database and deletes it. We can achieve this by doing:

```
app.delete('/delete', (req, res) => {
  Post.findByIdAndRemove(req.body.id, {}, (error, data) => {
    if (error) return res.sendStatus(500).json(error)
    return res.json(data)
  })
})
```

Here, we are using the `Post` constant that we created to query the database and find it by the `id` (which we are passing into the `req.body`), and then once we find that record, we are deleting it. Once the delete operation is done, we are going to simply send back whatever the deleted object was to the user.

## Testing

In order to test this, we are going to use Postman to delete the record. First, startup your server by `cd`ing into the `examples/` directory and running `node delete.js` or by doing the same wherever you saved your file. Open up a new tab in Postman and enter `http://localhost:3000/delete`. In the dropdown next to the URL, select the dropdown and click on "DELETE". Then, under the `Body` tab, click on `Raw` and then in the dropdown that says `Text`, select `JSON`. In the body of the request, insert the following data:

```
{
  "id": "<POST_ID>"
}
```

When you click "Send" you should see the deleted post being sent back. In the event that there is an error message, you will receive that instead.
