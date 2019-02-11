const express = require("express");
const router = express.Router();

router.get("/first", async (req, res) => {
    res.send("first Page");
});

module.exports = router;