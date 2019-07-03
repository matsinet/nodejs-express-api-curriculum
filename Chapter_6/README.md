# Final Step: Delete

So far, we've done Create, Read, and Update. The final step in the process is the ability to Delete a record.

## Setting up Delete

To set up a delete operation, we are going to create a new `DELETE` route that finds the record in the database and deletes it. We can achieve this by doing:

```
app.delete('/posts/:postId', (req, res) => {
  Post.findByIdAndRemove(req.params.postId, {}, (error, data) => {
    if (error) return res.sendStatus(500).json(error)
    return res.json(data)
  })
})
```

Here, we are using the `Post` constant that we created to query the database and find it by the `id` (which we are passing in the request parameters `req.params`), and then once we find that record, we are deleting it. Once the delete operation is done, we are going to simply send back whatever the deleted object was to the user.

## Testing

In order to test this, we are going to use Insomnia to delete the record. First, startup your server by `cd`ing into the `examples/` directory and running `node delete.js` or by doing the same wherever you saved your file. Open up a new tab in Insomnia and enter `http://localhost:3000/posts/<POST_ID>`. In the dropdown next to the URL, select the dropdown and click on "DELETE". 

When you click "Send" you should see the deleted post being sent back. In the event that there is an error message, you will receive that instead.

<< [Chapter 5: Updating a Record](../Chapter_5/README.md) || [Home](../README.md)
