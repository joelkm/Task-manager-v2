const express = require('express')
const router = express.Router();
const path = require('path');
const { checkLoged, checkNotLoged } = require('../common/authCheck');

const distPath = path.join(__dirname, "..", "..", "dist");

router.use(express.static(distPath, {index: false}));

router.get("/", checkLoged, (req, res) => { 
    res.sendFile(path.join(distPath, "index.html"));
});

router.get("/login", (req, res) => {
    if (req.user) res.redirect('/') 
    res.sendFile(path.join(distPath, "index.html"));
});

router.get("/signup", (req, res) => {
    if (req.user) res.redirect('/') 
    res.sendFile(path.join(distPath, "index.html"));
});

module.exports = router;