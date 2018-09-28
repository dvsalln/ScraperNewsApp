var router = require("express").Router();
var apiRoutes = require("./api");
var viewRoutes = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;

// This route renders the homepage
router.get("/", function(req, res) {
    res.render("home");
  });
  
  // This route renders the saved handledbars page
  router.get("/saved", function(req, res) {
    res.render("saved");
  });
  
  module.exports = router;