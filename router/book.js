const express = require('express');
const router = express.Router();
const Book = require('../models/book');

//get a list of student from the database
router.get('/book', function(req, res, next) {
    Book.find({}).then(function(books){
        res.send(books);
    }).catch(next);
});

// add new Book to database
router.post('/book', function(req, res, next) {
    Book.create(req.body).then(function(book) {
        res.send(book);
    }).catch(next);
});

router.put('/book/:id', function(req, res, next) {
    Book.findOneAndUpdate({_id: req.params.id},req.body).then(function(books){
        Book.findOne({_id: req.params.id}).then(function(books){
            res.send(books);
        }).catch(next);
    })   
});

router.delete('/book/:id', function(req, res, next) {
    Book.findOneAndDelete({_id: req.params.id}).then(function(book){
        res.send(book);
    });
});

module.exports = router;
