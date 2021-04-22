const { Router } = require('express');
const router = Router();

// routes

router.get('/test', (req, res) => {
    const data = {
        "name": "Edgar",
        "website": "www.edgar.com"
    };
    res.json(data);
});

module.exports = router;