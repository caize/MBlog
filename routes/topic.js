/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const router = require('express').Router();
const Topic = require('../modules/topic');

router.get('/getList',function(req,res,next){
  Topic.getList(req.query['page']).then((data) => (res.json(data))).catch((err)=>{console.log(err);res.status(400).end();});
});

module.exports  = router;