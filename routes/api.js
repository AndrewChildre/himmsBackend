const express = require('express');
const router = express.Router();
const Element = require('../models/element')

router.get('/elements', (req, res, next) => {
   Element.find({}).then(function(element){
       res.send(element)
   })
});

router.get('/resolve/:id', (req, res) => {
    Element.find(req.params.id).then(function(element){
        res.send(element)
    })
})

router.post('/elements', (req, res, next) => {
    Element.create(req.body)
    .then((element) => {
         res.send({ element});
    }).catch(next)
});
router.put('/elements/:id', function(req, res, next) {
Element.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
    Element.findOne({ _id: req.params.id }).then(function(element){res.send(element);})
    
})

});

router.delete('/elements/:id', function(req, res, next)  {
    //    console.log(req.params.id);
    Element.findByIdAndRemove({_id: req.params.id}).then(function(element) {
        res.send(element)
    })
 
    });
  


module.exports = router;