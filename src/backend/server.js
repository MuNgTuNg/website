const express = require('express');
const path = require('path');
const database = require('./database'); //use this to call the database.js functions
const multer = require('multer');

const upload = multer(); 


const app = express();
app.use(express.static(path.join(__dirname, '../static')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.none()); 


const PORT = 80;



app.post('/api/comments', (req, res) => {

    /*
        retrieve form data from request
        request would be from a form with method POST and action "api/comments"

        <form action="/api/comments" method="post">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="John"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Doe"><br><br>
            <input type="submit" value="Submit">
        </form> 
    */ 

    const data = Object.assign({}, req.body);
    console.log(data);

    //sanitize form data

    //add post to database
    database.addPostToDatabase();

    //return post as http response - JSON
    res.status(200).send();
});


app.get('/api/comments', (req,res) => {
    //retrieve all posts and return as JSON
    database.readPostsFromDatabase();
});

app.patch('/api/comments', (req, res) => {
    database.updatePostInDatabase();
});

app.delete('/api/comment', (req, res) => {
    database.deletePostFromDatabase();
});



//this will serve the index for any path not recognised.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(PORT, () => {
    console.log(`Lowen Baban listening on PORT ${PORT}`);
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