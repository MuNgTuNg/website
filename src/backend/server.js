const express = require('express');
const app = express();
const port = 80;

const path = require('path');

app.use(express.static(path.join(__dirname, '../static')))



/*this function allows pages to load without appending .html to the url, 
this has the consequence of the <a> tags also not needing .html;
for example: 
	<a href="/health_benefits.html">Health Benefits</a>
    
Would change to:
	<a href="/health_benefits">Health Benefits</a>
    
*/
app.get('/:page', (req, res) => {
    res.sendFile(path.join(__dirname, '../static', req.params.page + '.html'));
});


//this will serve the index for any path not recognised.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})