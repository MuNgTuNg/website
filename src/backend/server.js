const express = require('express');
const path = require('path');
const database = require('./database'); //use this to call the database.js functions


const app = express();
app.use(express.static(path.join(__dirname, '../static')))
const port = 80;



app.post('api/comment', (req, res) => {
    //retrieve form data

    //sanitize form data

    //add post to database
    database.addPostToDatabase();

    //return post as http response - JSON
});

app.get('api/comments', (req,res) => {
    //retrieve all posts and return as JSON
    database.readPostsFromDatabase();
});

app.patch('api/comments', (req, res) => {
    database.updatePostInDatabase();
});

app.delete('api/comment', (req, res) => {
    database.deletePostFromDatabase();
});



//this will serve the index for any path not recognised.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});




/*this function allows pages to load without appending .html to the url, 
this has the consequence of the <a> tags also not needing .html;
for example: 
	<a href="/health_benefits.html">Health Benefits</a>
Would change to:
	<a href="/health_benefits">Health Benefits</a>
*/
// app.get('/:page', (req, res) => {
//     res.sendFile(path.join(__dirname, '../static', req.params.page + '.html'));
// });