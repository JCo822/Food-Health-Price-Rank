const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const nutrient = {
  'vitamin c':{
    'type': 'Vitamin',
    'weight': 1,
    'mUnit': 'mg'
  },
  'vitamin e':{
    'type': 'Vitamin',
    'weight': 1,
    'mUnit': 'mg'
  },
  'iron':{
    'type': 'Mineral',
    'weight': 1,
    'mUnit': 'mg'
  }
};

app.use(cors());
app.use(express.static('Frontend'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Frontend/html/index.html')
});
app.get('/api/:nutrient', (req, res) => {
  console.log(req.params);
  const nutrientType = req.params.nutrient.toLowerCase();
  if (nutrient[nutrientType]){
    res.json(nutrient[nutrientType]);
  }
  else{
    return "Nutrient doesn't exist";
  }
  //res.json(nutrient);
});
app.listen(process.env.PORT || PORT, () => {
  console.log(`CONFIRMATION: Server is running on ${PORT}.`);
});
//const http = require('http');
//const fs = require('fs');
//const url = require('url');
//const querystring = require('querystring');
// const server = http.createServer((req, res) => {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(res.url).query);
//   console.log(page);
//   if (page == '/'){
//     fs.readFile(/html/index.html, function(err, data){
//       res.whiteHead(200, {'Content-Type':'text/html'});
//       res.write(data);
//       res.end();
//     });
//   };
// });
