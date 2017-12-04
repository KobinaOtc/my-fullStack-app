const {Router} = require("express");
const Post = require("../models/post.js");

const postsRouter = Router();

postsRouter.route("/")
.get((req, res) => {
  Post.find(req.query, (err, data) => {
    if(err) {
      res.status(500).send({message: "Error on Server", error: err});
    } else if (data === null) {
      res.status(404).send({message: `Error, no item found!`})
    } else {
      res.status(200).send({message: "Success, here is ur data", data})
    }
  })
})
.post((req, res) => {
  let newPost = new Post(req.body);
  newPost.save ((err, data) => {
    if (err) {
      res.status(400).send({message: "Erro", error: err})
    } else {
      res.status(200).send({message: "Success, post added", data})
    }
  })
});
//Make id a constant var


postsRouter.route("/:id")
.get((req, res) => {
  let id = req.params.id;
  Post.find({"_id": id}, (err, data) => {
    if(err) {
      res.status(500).send({message: "Erro", error: err});
    } else if (data === null) {
      res.status(404).send({message: `Erro, no item found! ${id}`})
    } else {
      res.status(200).send({message: "Success, here is ur data", data})
    }
  })
})
.delete((req, res) => {
  let id = req.params.id;
  Post.findByIdAndRemove({"_id": id}, (err, data) => {
    if(err) {
      res.status(500).send({message: "Erro", error: err});
    } else if (data === null) {
      res.status(404).send({message: `Erro, no item found! ${id}`})
    } else {
      res.status(200).send({message: "Success, ur data was deleted", data})
    }
  })
})
.put((req, res) => {
  let id = req.params.id;
  Post.findByIdAndUpdate({"_id": id}, {$set: req.body}, (err, data) => {
    if(err) {
      res.status(500).send({message: "Erro", error: err});
    } else if (data === null) {
      res.status(404).send({message: `Erro, no item found! ${id}`})
    } else {
      res.status(200).send({message: "Success, ur data was updated", data})
    }
  })
})

postsRouter.put("/up/:id", (req, res) => {
  let id = req.params.id;
  Post.findOne({"_id": id}, (err, data) => {
    if(err) {
      res.status(500).send({message: "Erro", error: err});
    } else if (data === null) {
      res.status(404).send({message: `Erro, no item found! ${id}`})
    } else {
      let {upVote} = data;
      Post.findByIdAndUpdate({"_id": id}, {$set: {upVote: upVote + 1}}, (err, data) => {
        if(err) {
          res.status(500).send({message: "Erro", error: err});
        } else if (data === null) {
          res.status(404).send({message: `Erro, no item found! ${id}`})
        } else {
          res.status(200).send({message: "Success, ur data was updated", data})
        }
      })
    }
  })
})

postsRouter.put("/down/:id", (req, res) => {
  let id = req.params.id;
  Post.findOne({"_id": id}, (err, data) => {
    if(err) {
      res.status(500).send({message: "Erro", error: err});
    } else if (data === null) {
      res.status(404).send({message: `Erro, no item found! ${id}`})
    } else {
      let {downVote} = data;
      Post.findByIdAndUpdate({"_id": id}, {$set: {downVote: downVote + 1}}, (err, data) => {
        if(err) {
          res.status(500).send({message: "Erro", error: err});
        } else if (data === null) {
          res.status(404).send({message: `Erro, no item found! ${id}`})
        } else {
          res.status(200).send({message: "Success, ur data was updated", data})
        }
      })
    }
  })
})


module.exports = postsRouter
