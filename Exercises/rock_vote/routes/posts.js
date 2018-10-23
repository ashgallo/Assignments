const express = require("express");

const { Router } = express;

const Post = require("../models/posts");
const voteRouter = Router();

voteRouter.route("/")
    .get((req, res) => {
        Post.find({}, (err, items) => {
            if(err) {
                res.status(400)
                next (err)
            }
            res.status(200).send(items);
        })
    })
    .post((req, res, next) => {
        const newPost = new Post(req.body);
        newPost.save((err, savedPost) => {
            if (err) next(err);
            else res.status(201).send(savedPost);
        })
    })

voteRouter.route("/:id")
    .get((req, res, next) => {
        Post.findById(req.params.id, (err, foundPost) => {
            if (err) {
                res.status(400)
                next
            } else {
                res.status(200).send(foundPost)
            }
        })
    })
    .delete((req, res, next) => {
        Post.findByIdAndDelete(req.params.id, (err) => {
            if (err) {
                res.status(400)
                next (err)
            } else {
                res.status(204).send()
            }
        })
    })
    .put((req, res, next) => {
        Post.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, editedPost) => {
            if (err) {
                res.status(400)
                next (err)
            } else {
                res.status(200).send(editedPost)
            }
        })
    })

voteRouter.route("/:id/comments")
    .post((req, res, next) => {
        //find the post with matching ID
        Post.findById(req.params.id)
            .then(foundPost => {
                // add comment to array
                foundPost.comments.push(req.body);

                // save parent to database again
                return foundPost.save()
             })
            // return the parent
            .then(savedPost => res.status(201).send(savedPost))
            .catch(err => next(err))
    })

voteRouter.route("/:id/comments/:commentId")
    .get((res, res, next) => {
        Post.findById(req.params.id)
        .then(foundPost => {
            const foundComment = foundPost.comments.id(req.params.com)
            res.status(200).send(foundComment)
        }) 
    })
    .delete((req, res, next) => {
        Post.findById(req.params.id)
        .then(foundPost => {
            foundPost.comments.id(req.params.commentId).remove()
            foundPost.save((err) => {
                if (err) {
                    res.status(400)
                    next (err)
                }
                res.status(204).send();
            })
        })
    })
    .put((req, res, next) => {
        post.findById(req.params.id, { new: true})
        .then(foundPost => {
            const foundComment = foundPost.comments.id(req.params.commentId);
            foundComment.set(req.body)
            return foundPost.save((err) => {
                if(err) {
                    res.status(400)
                    next(err)
                }
                res.status(200).send(foundPost)
            })
        })
    })
//     .delete()

module.exports = voteRouter