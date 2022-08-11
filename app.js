const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/journalDB");

const postsSchema = {
    title: String,
    content: String
};
const Post = mongoose.model("Post", postsSchema);

app.get("/", function (req, res) {
    Post.find({}, function(err,foundPosts){
        res.render("home", {
            posts: foundPosts
        });
    })

});
app.post("/", function(req,res){
    const post = new Post({
        title: req.body.diaryTitle,
        content: req.body.diaryContent
    });
    post.save(function(err){
        if(err){
            console.log("Error saving to db");
        }else{
            console.log("Successfully Saved");
        }
    });
    res.redirect("/");
});


app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});