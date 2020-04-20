const axios = require("axios");
const config = require("./../config/config");

const headers = {
  "Content-Type": "application/json;charset=utf-8",
  Authorization: "Bearer " + config.tmdbAccessToken
};

exports.getTMDBAccountDetails = async (request, response) => {
  await axios
    .get("https://api.themoviedb.org/3/tv/100", { headers: headers })
    .then(function(data) {
      //   console.log("response");
      //   console.log(response);
      response.json(data.data);
    })
    .catch(function(error) {
      console.error(error.message);
    });
};

exports.getTvSeriesData = async (request, response) => {
  const tvId = request.params.tvId;
  console.log("tvId");
  console.log(tvId);
  console.log("https://api.themoviedb.org/3/tv/" + tvId);
  await axios
    .get("https://api.themoviedb.org/3/tv/" + tvId, { headers: headers })
    .then(function(data) {
      //   console.log("response");
      //   console.log(response);
      response.json(data.data);
    })
    .catch(function(error) {
      console.error(error.message);
    });
};

exports.getTvSeriesDetailsFromQuery = async (request, response) => {
  await axios
    .get(
      "https://api.themoviedb.org/3/search/tv?query=" +
        request.query.searchQuery,
      { headers: headers }
    )
    .then(function(data) {
      //   console.log("response");
      //   console.log(response);
      response.json(data.data);
    })
    .catch(function(error) {
      console.error(error.message);
    });
};

exports.getSimilarTvShows = async (request, response) => {
  await axios
    .get("https://api.themoviedb.org/3/tv/37854/similar", {
      headers: headers
    })
    .then(function(data) {
      response.json(data.data);
    })
    .catch(function(error) {
      console.log(error.message);
    });
};
