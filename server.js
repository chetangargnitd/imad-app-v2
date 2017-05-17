var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title: 'Article One | Chetan Garg' ,
        heading: 'Article One',
        date: '12th May, 2017',
        content:`                
                    <p>
                        Life is something we all share
                        Just like oxygen in the air 
                        The way we live it is up to us 
                        With a negative or with a plus
                    </p>
                    <p>
                       Life is something, we should cherish, 
                        We never know, when we will perish. 
                        Live each and every single day, 
                        Smell the flowers, stop and play. 
                    </p>
                    <p>
                        Life is something, we have been blessed, 
                        Choice is yours, choose your quest. 
                        Follow your passions, and you will be fine, 
                        With the right attitude, you will shine.
                    </p> 
                `
    },
    
    'article-two' :{
        title: 'Article Two |Chetan Garg;',
        heading: 'Article Two' ,
        date: '12th May, 2017',
        content:`                
                    <p>
                        Life is something we all share
                        Just like oxygen in the air 
                        The way we live it is up to us 
                        With a negative or with a plus
                    </p>
                    <p>
                       Life is something, we should cherish, 
                        We never know, when we will perish. 
                        Live each and every single day, 
                        Smell the flowers, stop and play. 
                    </p>
                    <p>
                        Life is something, we have been blessed, 
                        Choice is yours, choose your quest. 
                        Follow your passions, and you will be fine, 
                        With the right attitude, you will shine.
                    </p> 
                `
    },
    
    'article-three' : {
        title: 'Article Three | Chetan Garg' ,
        heading: 'Article Three' ,
        date: '12th May, 2017',
        content:`                
                    <p>
                        Life is something we all share
                        Just like oxygen in the air 
                        The way we live it is up to us 
                        With a negative or with a plus
                    </p>
                    <p>
                       Life is something, we should cherish, 
                        We never know, when we will perish. 
                        Live each and every single day, 
                        Smell the flowers, stop and play. 
                    </p>
                    <p>
                        Life is something, we have been blessed, 
                        Choice is yours, choose your quest. 
                        Follow your passions, and you will be fine, 
                        With the right attitude, you will shine.
                    </p> 
              `
    },
};



function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate =`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                    <hr/>
                </div>
                <div>
                    <h3>
                       ${heading}
                    </h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `
    ;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res){
    //articleName ==article-one
    //articles[articleName] = {} contents for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function (req,res){
    counter = counter + 1;
    res.send(counter.tostring());
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
