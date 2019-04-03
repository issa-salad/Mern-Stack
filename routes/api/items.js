const express = require('express');
const router = express.Router();

// item model
 const item = require('../../models/item');


 // @route     Get app/items
  // @desc     Get all items 
   // @access  public 

router.get('/', (req,res) => {
    item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});


    // @route       POST app/items
  //   @desc        Add a item 
   //  @access      public 

router.post('/', (req,res) => {
    const newItem = new item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

 //   @route     delete app/items/:id
  //  @desc      delete items 
   // @access    public 

router.delete('/:id', (req,res) => {
    item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;