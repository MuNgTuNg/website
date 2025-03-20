const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database/posts.db');


//keep database logic in here to use in the api code
function addPostToDatabase(){

}
function readPostsFromDatabase(){

}
function updatePostInDatabase(){

}
function deletePostFromDatabase(){

}


module.exports = {
    addPostToDatabase,
    readPostsFromDatabase,
    updatePostInDatabase,
    deletePostFromDatabase
}