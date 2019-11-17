var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/auth/register" ,(req,res)=>{
   console.log(req.body)
   res.send({
     status : true
   })
})
router.post("/auth/signin" ,(req,res)=>{
  console.log(req.body)
  res.send({
    status : true
  })
})

module.exports = router;
