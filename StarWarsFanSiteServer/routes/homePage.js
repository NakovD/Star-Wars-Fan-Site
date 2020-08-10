const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('ready sucka');
});





module.exports = router;