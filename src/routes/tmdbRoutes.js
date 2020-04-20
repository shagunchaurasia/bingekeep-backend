const router = require("express").Router();
const tmdbController = require("./../controllers/tmdbController");

router.get("/tv/:tvId", tmdbController.getTvSeriesData);

router.get("/searchTv", tmdbController.getTvSeriesDetailsFromQuery);

router.get("/searchSimilarTv", tmdbController.getSimilarTvShows);
module.exports = router;
