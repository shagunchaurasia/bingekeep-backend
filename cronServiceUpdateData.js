const axios = require("axios");
const mongoDataArray = [];
const promises = [];
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const args = process.argv.slice(2);

console.log(args);

mongoose.connect("mongodb://localhost/bingeKeepDB", { useNewUrlParser: true });

var tvSeriesSchema = new Schema(
  {},
  { collection: "tvSeriesData", strict: false }
);
var tvSeriesModel = mongoose.model("tvSeriesData", tvSeriesSchema);

async function requestSend(number) {
  await axios
    .get("http://localhost:5000/api/tmdb/tv/" + number)
    .then(response => {
      console.log(typeof response.data);
      console.log(response);
      response.data.tvId = number;
      var tvSeriesSingle = new tvSeriesModel(response.data);
      tvSeriesSingle.save(function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log("successfully saved");
        }
      });
    });
}
for (var i = args[0]; i <= args[1]; i++) {
  requestSend(i);
}

// for (let i = 41; i <= 45; i++) {
//   console.log(i);
//   promises.push(
//     axios.get("http://localhost:5000/api/tmdb/tv/" + i).then(response => {
//       //   console.log(typeof response.data);
//       console.log("Sending request");
//       mongoDataArray.push(response.data);
//     })
//   );
// }

// Promise.all(promises)
//   .then(() => {
//     console.log(mongoDataArray);

//     tvSeriesModel.insertMany(mongoDataArray, function(error, docs) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("These are the docs" + docs);
//       }
//     });

//     //   for (let j = 0; j < mongoDataArray.length; j++) {
//     //     console.log(j);
//     //     var tvSeriesSingle = new tvSeriesModel(mongoDataArray[j]);
//     //     // tvSeriesSingle.save(function(error) {
//     //     //   if (error) {
//     //     //     console.log(error);
//     //     //   } else {
//     //     //     console.log("successfully saved");
//     //     //   }
//     //     // });
//     //     console.log(mongoDataArray[j]);
//     //   }
//   })
//   .catch(function(error) {
//     console.log(error.message);
//   });
