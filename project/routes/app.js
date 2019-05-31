var router = require('express').Router()
var User = require('../type/user')
var Post = require('../type/post')
var Comment = require('../type/comments')
var faker = require('faker')
var session = require("express-session")

//creating route to add user page
router.get('/add-user', function(req, res, next) {
    res.render('../views/add-user')
})


//creating route to login page
router.get('/login', function(req, res, next) {
  res.render('../views/login')
})

//creating route to add posts page
router.get('/addposts', function(req, res) {
  res.render("../views/addposts")
})

//adding user to database
router.post('/add-user', function(req, res, next) {
    console.log(req.body) ;
      var user = new User()

    user.username = req.body.username
    user.password = req.body.password

    user.save().then(user => console.log('New user created ', user)).catch(err => console.log(err))
    res.redirect('/')
})


//user login
router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username : username, password : password}, function (err, user) {
    if (err) {
      console.log(err)
    } 
    if (!user) {
      return res.status(404).send("<h1>User not found</h1>")
    }
    // req.session.user = user;
    return res.send(`<h1>Welcome ${username}</h1>`)
  })
  res.redirect('/')
})

//persisting a login
// router.get('/dashboard', function(req, res) {
//   if(!req.session.user) {
//     res.status(401).send();
//   } else {
//     res.status(200).render('/home')
//   }
// })

//adding posts to homepage
router.post('/addpost', function(req, res) {
  var post = new Post ()

  post.title = req.body.title,
  post.body = req.body.body,

post.save()
.then(post=> console.log('new post ', post))
.catch(err =>{
  console.log(err);
  res.sendStatus(500);
});

// Post.find({}, function(err, posts) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     // console.log(postlist)
//     res.render('home.ejs', {posts : posts});
//   }
// })
});

module.exports = router;