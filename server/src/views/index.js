const express = require('express')
const router = express.Router();
const path = require('path');

const { checkSession, checkNoSession } = require('../common/session-status');

const distPath = path.join(__dirname, "..", "..", "..", "client", "dist");

router.use(express.static(distPath, {index: false}));

router.get("/*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

module.exports = router;