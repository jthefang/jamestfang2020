const express = require('express');
const router = express.Router();
const Blogpost = require('../../models/Blogpost');

// @route   POST api/blogposts
// @desc    Create a blogpost
// @access  Public
router.route('/').post((req, res) => {
  const body = req.body.body;

  const newBlogpost = new Blogpost({
    body,
  });

  newBlogpost.save()
    .then(blogpost => res.json(blogpost))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   GET api/blogposts
// @desc    Read all blogposts
// @access  Public
router.route('/').get((req, res) => {
  Blogpost.find()
    .sort([['date', 'desc']])
    .then(blogposts => res.json(blogposts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   GET api/blogposts/:id
// @desc    Get blogpost by id
// @access  Public
router.route('/:id').get((req, res) => {
  Blogpost.findById(req.params.id)
    .then(blogpost => res.json(blogpost))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   POST api/blogposts/update/:id
// @desc    Update blogpost
// @access  Public
router.route('/update/:id').post((req, res) => {
  Blogpost.findById(req.params.id)
    .then((blogpost) => {
      blogpost.body = req.body.body;
      
      blogpost.save()
        .then(() => res.json('Blogpost updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   DELETE api/blogposts/:id
// @desc    Delete a blogpost
// @access  Public
router.route('/:id').delete((req, res) => {
  Blogpost.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blogpost deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;